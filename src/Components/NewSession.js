import React from "react";
//import styled from "styled-components";
import { useState } from 'react';
import Navbar from "./Navbar";
import {useNavigate} from 'react-router-dom';
import { db } from "../config/firebase-config";
import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useUserAuth } from "../context/userAuthContext";

const NotesContainer = styled.div`
width: 80%;
height: 300px;
margin: auto;
text-align:center;
`

const Title = styled.h2`
  color: black;
  font-weight: 600;
  text-align: center;
`;

const ButtonAdd = styled.button`
  width: 85px;
  background: black;
  color: white;
  border-radius: 7px;
  padding: 12px;
  margin: 10px;
  font-size: 14px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px blue;
  }
`;

const ButtonSave = styled.button`
  width: 30%;
  position:realtive;
bottom: 0;
margin: auto;
  background: red;
  color: white;
  border-radius: 7px;
  padding: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px red;
  }
`;



function NewSession(){

    const timeStart = new Date();
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState("Untitled (double click to edit)")
    const [style, setStyle] = useState({ width: '80%', height: '10%', borderRadius: '7px' });
    const { user } = useUserAuth();
  

    const handleNoteClick = () => {
        const text = document.querySelector('#noteinput').value.trim();
        if (text) {
          const newNote = {
                "id": uuidv4(), 
                "topic_id": null,
                "note": text
          }
          document.querySelector('#noteinput').value = '';
          const updatedNotes = [...notes, newNote];
          setNotes(updatedNotes);
        }

      };
    
      const handleTitleChange = (event) => {
        if (event.key === 'Enter') {
        setTitle(event.target.value);
        setIsEditing(false);
        }
      }

      const handleInputChange = (event) => {
        if(event.key === 'Enter'){
          handleNoteClick();      
        }else if(event.target.value.length > 100){
          setStyle({width: '80%', height: '10%', border: '3px solid red', borderRadius: '7px', outline: 'none'})
        }else{
          setStyle({width: '80%', height: '10%', border: '3px solid blue', borderRadius: '7px', outline: 'none'})
        }
        
      }

      const handleSaveClick = async () =>{
        const sessionsColRef = collection(db, 'sessions');
        await addDoc(sessionsColRef, {
            created: serverTimestamp(),
            date: timeStart, 
            name: title, 
            notes: notes, 
            topics: [], 
            user: user.uid         
        }).then(
           ()=>{navigate('/home');}
          )
        
      }

    return( 
        <>
        <Navbar></Navbar>
         <NotesContainer>
        
        {
                isEditing ? 
                <input type = 'text' style={{ width:'20%' }} onKeyDown={handleTitleChange} defaultValue = {title}/> 
                : <Title onDoubleClick ={()=> setIsEditing(true)}>{title}</Title>
        }
       
        <input id="noteinput" style={style} type="text" onKeyDown={handleInputChange} placeholder="Enter a new note" />
        <ButtonAdd onClick={handleNoteClick}>Add note</ButtonAdd>
        {notes.map((note, i)=>(<p key={i}>{note.note}</p>))}
        <ButtonSave onClick={handleSaveClick}>Save and close</ButtonSave>
        </NotesContainer>
        </>
        
    )
}

export default NewSession;