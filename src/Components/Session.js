import React from 'react';
//import PropTypes from "prop-types";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Note from './Note';
import Topic from './Topic';
import Title from './Title';
import { doc, getDoc, updateDoc, arrayRemove, deleteField } from 'firebase/firestore';
import { db } from '../config/firebase-config';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CardWrapper = styled.div`
  padding: 3%;
  width: 80%;
  margin: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

function Session(props) {
  let { id } = useParams();
  const sessRef = doc(db, 'sessions', id);
  const [session, setSession] = useState(null);
  const [textarea, setTextarea] = useState('Please enter a short summary');
  const [editSummary, setEditSummary] = useState(true);

  const handleTitleChange = async (event, topic) => {
    if (event.key === 'Enter') {
      //const sessRef = doc(db, 'sessions', id);
      await updateDoc(sessRef, {
        name: event.target.value,
      }).then(() => {
        setSession({ ...session, name: event.target.value });
      });
    }
  };

  const handleTextareaChange = (event) => {
    setTextarea(event.target.value)
    console.log(textarea)
  }

  const handleSubmit = async (e) => {
       e.preventDefault()
       await updateDoc(sessRef, {
        summary: textarea,
      }).then(() => {
        setSession({ ...session, summary: textarea });
        setEditSummary(true);
        console.log("summary set")
      });
  }

  const handleSummaryUpdate = () =>{
       setTextarea(session.summary);
       setEditSummary(false);
  }

  const handleSummaryDel = async () =>{
    await updateDoc(sessRef, {
      summary: deleteField(),
    }).then(() => {
      setEditSummary(false);
      setTextarea('Please enter a short summary');
      console.log('summary deleted');
    });
  }

  const handleNoteUpdate = async (event, note) => {
    if (event.key === 'Enter') {
      const updtNote = {
        id: note.id,
        note: event.target.value,
        topic_id: note.topic_id,
      };
      let updatedNotes = session.notes.filter((item) => item.id !== note.id);
      updatedNotes.push(updtNote);
      const sessRef = doc(db, 'sessions', id);
      await updateDoc(sessRef, {
        notes: updatedNotes,
      }).then(() => {
        setSession({ ...session, notes: updatedNotes });
      });
    }
  };

  const handleNoteDel = async (note) => {
    const updatedNotes = session.notes.filter((item) => item.id !== note.id);
    const sessRef = doc(db, 'sessions', id);
    await updateDoc(sessRef, {
      notes: arrayRemove(note),
    }).then(() => {
      setSession({ ...session, notes: updatedNotes });
      console.log('note deleted');
    });
  };

  const handleAddTopic = async (event) => {
    const text = document.querySelector('#topicinput').value.trim();
    if (text) {
      let updTopics = session.topics;
      updTopics.push({ id: uuidv4(), topic: text });
      const sessRef = doc(db, 'sessions', id);
      await updateDoc(sessRef, {
        topics: updTopics,
      }).then(() => {
        setSession({ ...session, topics: updTopics });
      });
    }
    document.querySelector('#topicinput').value = '';
  };

  const handleTopicUpdate = async (event, topic) => {
    if (event.key === 'Enter') {
      const updtTopic = {
        id: topic.id,
        topic: event.target.value,
      };
      let updatedTopics = session.topics.filter((item) => item.id !== topic.id);
      updatedTopics.push(updtTopic);
      const sessRef = doc(db, 'sessions', id);
      await updateDoc(sessRef, {
        topics: updatedTopics,
      }).then(() => {
        setSession({ ...session, topics: updatedTopics });
      });
    }
  };

  const handleTopicDel = async (topic) => {
    const updatedTopics = session.topics.filter((item) => item.id !== topic.id);
    const updatedNotes = session.notes.map((note) => {
      if (note.topic_id === topic.id) {
        note.topic_id = null;
      }
      return note;
    });
    const sessRef = doc(db, 'sessions', id);
    await updateDoc(sessRef, {
      topics: arrayRemove(topic),
      notes: updatedNotes,
    }).then(() => {
      setSession({ ...session, topics: updatedTopics, notes: updatedNotes });
      console.log('topic deleted');
    });
  };

  const handleTopicAssign = async (topic, note) => {
    //console.log(id)
    const updtNote = {
      id: note.id,
      note: note.note,
      topic_id: topic,
    };
    let updatedNotes = session.notes.filter((item) => item.id !== note.id);
    updatedNotes.push(updtNote);
    const sessRef = doc(db, 'sessions', id);
    await updateDoc(sessRef, {
      notes: updatedNotes,
    }).then(() => {
      setSession({ ...session, notes: updatedNotes });
    });
  };

  useEffect(() => {
    async function getDocument() {
      try {
        const sessRef = doc(db, 'sessions', id);
        const docSnap = await getDoc(sessRef);
        if (docSnap.exists()) {
          console.log('Document data:', docSnap.data());
          setSession(docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      } catch (error) {
        console.log(error);
      }
    }
    getDocument();
  }, [id]);

  if (!session) {
    return <h2>no session to display</h2>;
  }

  return (
    <>
      <Navbar></Navbar>
      <CardWrapper>
        <Title name={session.name} updTitle={handleTitleChange} />
        <h2>
          Session recorded on{' '}
          {new Date(session.date.seconds * 1000).toLocaleString('en-GB', {
            timeZone: 'UTC',
          })}
        </h2>
        <div>
          <input
            id="topicinput"
            style={{ width: '20%' }}
            type="text"
            placeholder="Enter a new topic"
          />
          <button onClick={handleAddTopic}>Add topic</button>
        </div>

        {session.topics.length !== 0
          ? session.topics.map((topic, i) => (
              <div key={i}>
                <Topic
                  key={i}
                  topic={topic}
                  delTopic={handleTopicDel}
                  updTopic={handleTopicUpdate}
                />
                {session.notes.length === 0
                  ? ''
                  : session.notes.map((note, i) => (
                      <div key={i}>
                        {topic.id === note.topic_id ? (
                          <Note
                            key={i}
                            note={note}
                            topics={session.topics}
                            delNote={handleNoteDel}
                            updNote={handleNoteUpdate}
                            setTopic={handleTopicAssign}
                          />
                        ) : (
                          ''
                        )}
                      </div>
                    ))}
              </div>
            ))
          : ''}
        <div>
          <h4>Unorganized notes</h4>
          {session.notes.map((note, i) =>
            note.topic_id === null ? (
              <Note
                key={i}
                note={note}
                topics={session.topics}
                delNote={handleNoteDel}
                updNote={handleNoteUpdate}
                setTopic={handleTopicAssign}
              />
            ) : (
              ''
            )
          )}
        </div>
        <div>
          <h4>Summary</h4>
          {session.summary && editSummary ? (
            <div>
            <p>{session.summary}</p>
            <button onClick={handleSummaryUpdate}>Edit</button><button onClick={handleSummaryDel}>Delete</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <textarea value={textarea} onChange={handleTextareaChange} rows="4" cols="50"/>
              <input type="submit" />
            </form>
          )}
        </div>
      </CardWrapper>
    </>
  );
}

// Dashboard.propTypes = {
//   checkins: PropTypes.array.isRequired
// };

export default Session;
