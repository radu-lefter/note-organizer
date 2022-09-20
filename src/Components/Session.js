import React from 'react';
//import PropTypes from "prop-types";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Note from './Note';
import Topic from './Topic';
import {
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from 'firebase/firestore';
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
  const [session, setSession] = useState(null);
  //const [topics, setTopics] = useState([]);




  const handleNoteDel = async (note) => {
    const updatedNotes = session.notes.filter((item) => item.id !== note.id);
    setSession({ ...session, notes: updatedNotes });
    const sessRef = doc(db, 'sessions', id);
    //console.log(session);
    await updateDoc(sessRef, {
      notes: arrayRemove(note),
    }).then(() => {
      console.log('note deleted');
    });
  };

  const handleTopicDel = async (topic) => {
    const updatedTopics = session.topics.filter((item) => item.id !== topic.id);
    const updatedNotes = session.notes.map(function(note){if(note.topic_id === topic.id){note.topic_id=null} return note})
    setSession({ ...session, topics: updatedTopics, notes: updatedNotes });
    const sessRef = doc(db, 'sessions', id);
    await updateDoc(sessRef, {
      topics: arrayRemove(topic),
      notes: updatedNotes
    }).then(() => {
      console.log('topic deleted');
    });
  };

  const handleNoteChange = async (event, note) => {
    const updtNote = {
      id: note.id,
      note: event.target.value,
      topic_id: note.topic_id,
    };
    let updatedNotes = session.notes.filter((item) => item.id !== note.id);
    updatedNotes.push(updtNote);
    if (event.key === 'Enter') {
      setSession({ ...session, notes: updatedNotes });
      const sessRef = doc(db, 'sessions', id);
      await updateDoc(sessRef, {
        notes: arrayRemove(note),
      }).then(() => {
        updateDoc(sessRef, {
          notes: updatedNotes,
        });
      });
    }
  };

  const handleTopicChange = async (event, topic) => {
    const updtTopic = {
      id: topic.id,
      topic: event.target.value
    };
    let updatedTopics = session.topics.filter((item) => item.id !== topic.id);
    updatedTopics.push(updtTopic);
    if (event.key === 'Enter') {
      setSession({ ...session, topics: updatedTopics });
      const sessRef = doc(db, 'sessions', id);
      await updateDoc(sessRef, {
        topics: arrayRemove(topic),
      }).then(() => {
        updateDoc(sessRef, {
          topics: updatedTopics,
        });
      });
    }
  };

  const handleAddTopClick = async (event) =>{
    const text = document.querySelector('#topicinput').value.trim();
    let updTopics = session.topics;
    let newTopic = {};
    if (text) {
        newTopic["id"] = uuidv4();
        newTopic["topic"] = text
      updTopics.push(newTopic);
    }
      document.querySelector('#topicinput').value = '';
      setSession({ ...session, topics: updTopics }); 

    const sessRef = doc(db, 'sessions', id);
    await updateDoc(sessRef, {
      topics: updTopics
    });   
  }

  const handleTopicAssign = async (topic, note) => {
    const updtNote = {
      id: note.id,
      note: note.note,
      topic_id: topic.id,
    };
    let updatedNotes = session.notes.filter((item) => item.id !== note.id);
    updatedNotes.push(updtNote);
  
      setSession({ ...session, notes: updatedNotes });
      const sessRef = doc(db, 'sessions', id);
      await updateDoc(sessRef, {
        notes: arrayRemove(note),
      }).then(() => {
        updateDoc(sessRef, {
          notes: updatedNotes,
        });
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

  //let data = props.sessions.find((session) => session.id === id);

  if (!session) {
    return <h2>no session to display</h2>;
  }

  return (
    <>
      <Navbar></Navbar>
      <CardWrapper>
        <h1>Hi from {session.name}</h1>
        <h2>Session recorded at {session.date.seconds}</h2>
        <div>
          {/* <h3>Your topics</h3>
          {session.topics.length !== 0 ? (
            session.topics.map((topic, i) => (
              <div>
                <h4>{topic.topic}</h4>
              </div>
            ))
          ) : (
            <p>No topics to display</p>
          )} */}
          <input
            id="topicinput"
            style={{ width: '20%' }}
            type="text"
            placeholder="Enter a new topic"
          />
          <button onClick={handleAddTopClick}>Add topic</button>
        </div>

        {session.topics.length !== 0
          ? session.topics.map((topic, i) => (
              <>
                <Topic key={topic.id} topic={topic} delTopic={handleTopicDel} updTopic={handleTopicChange}/>
                {session.notes.length === 0
                  ? ''
                  : session.notes.map((note, i) => (
                      <>
                        {topic.id === note.topic_id ? (
                          <Note
                            key={note.id}
                            note={note}
                            topics={session.topics}
                            delNote={handleNoteDel}
                            updNote={handleNoteChange}
                            setTopic={handleTopicAssign}
                          />
                        ) : (
                          ''
                        )}
                      </>
                    ))}
              </>
            ))
          : ''}
        <div>
          <h4>Unorganized notes</h4>
          {session.notes.map((note, i) =>
            note.topic_id === null ? (
              <Note
                key={note.id}
                note={note}
                topics={session.topics}
                delNote={handleNoteDel}
                updNote={handleNoteChange}
                setTopic={handleTopicAssign}
              />
            ) : (
              ''
            )
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
