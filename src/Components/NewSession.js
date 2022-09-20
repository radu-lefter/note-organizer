import React from "react";
//import styled from "styled-components";
import { useState } from 'react';
import Navbar from "./Navbar";
import {useNavigate} from 'react-router-dom';
import { db } from "../config/firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function NewSession(){

    const timeStart = new Date();
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState("Untitled")


    const handleNoteClick = () => {
        const text = document.querySelector('#noteinput').value.trim();
        if (text) {
          const newNote = {
                "id": notes.length + 1, 
                "topic_id": null,
                "note": text
          }
          document.querySelector('#noteinput').value = '';
          const updatedNotes = [...notes, newNote];
          console.log(updatedNotes);
          setNotes(updatedNotes);
        }

      };
    
      const handleTitleChange = (event) => {
        if (event.key === 'Enter') {
        setTitle(event.target.value);
        setIsEditing(false);
        }
      }

      const handleSaveClick = async () =>{
        const sessionsColRef = collection(db, 'sessions');
        await addDoc(sessionsColRef, {
            created: serverTimestamp(),
            date: timeStart, 
            name: title, 
            notes: notes, 
            topics: []         
        }).then(()=>{navigate('/');})
        
      }

    return( 
        <>
        <Navbar></Navbar>
        {
                isEditing ? 
                <input type = 'text' onKeyDown={handleTitleChange} defaultValue = {title}/> 
                : <h1 onDoubleClick ={()=> setIsEditing(true)}>{title}</h1>
        }
        <input id="noteinput" style={{ width: '80%' }} type="text" placeholder="Enter a new note" />
        <button onClick={handleNoteClick}>Add note</button>
        <button onClick={handleSaveClick}>Save and close</button>
        {notes.map((note, i)=>(<p key={i}>{note.note}</p>))}
        </>
        
    )
}

export default NewSession;