import React from 'react';
//import PropTypes from "prop-types";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Note from './Note'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useState, useEffect } from 'react';

export const CardWrapper = styled.div`
  padding: 3%;
  width: 80%;
  margin: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

function Session(props) {

  let { id } = useParams();

  
  //let data = props.sessions.find((session) => session.id === id)
  //data = data.session;
  //console.log(data);
  
  
  const [session, setSession] = useState(null);


  // const data = getDoc(sessRef).then((snapshot) => { 
  //       console.log(snapshot.data(), snapshot.id) 
  //       //setData(snapshot.data())
  //     });
  //     console.log(data)
  // async function getDocument() {
    
  //   await getDoc(sessRef).then((snapshot) => { 
  //     console.log(snapshot.data(), snapshot.id) 
  //     setData(snapshot.data())
  //   });
  // }

  // async function getDocument(){
  
  //  await getDoc(sessRef).then((snapshot) => { 
  //   setSession(snapshot.data())

  //   });
  // }

  useEffect(() => {
    async function getDocument(){
      try{
        const sessRef = doc(db, 'sessions', id);
        const docSnap = await getDoc(sessRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setSession(docSnap.data())
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error)
      }
      
    } 
    getDocument()
  }, [id]);

  
  

  //let data = props.sessions.find((session) => session.id === id);

  //console.log(data);

  if(!session){
    return <h2 >no session to display</h2>
  }

  return (
    
    <>
    <Navbar></Navbar>
    <CardWrapper>

      <h1>Hi from {session.name}</h1>
      <h2>Session recorded at {session.date.seconds}</h2>

      
      {session.topics.length !== 0
        ? session.topics.map((topic, i) => (
            <div>
              <h4>{topic.topic}</h4>
              {session.notes.length === 0
                ? ''
                : session.notes.map((note, i) => (
                    <>{topic.id === note.topic_id ? <Note key={note.id} note = {note}/> : ''}</>
                  ))}
            </div>
          )) : ""}
      <div>
        <h4>Unorganized notes</h4>
        {session.notes.map((note, i) =>
          note.topic_id === null ? <Note key={note.id} note = {note}/> : ''
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
