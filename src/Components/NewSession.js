import React from "react";
//import styled from "styled-components";
import { useState } from 'react';
import Navbar from "./Navbar";
import {useNavigate} from 'react-router-dom';
import { db } from "../config/firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

function NewSession(){

    const timeStart = new Date();
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState("Untitled")
    const [style, setStyle] = useState({ width: '80%' });


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
          console.log(updatedNotes);
          setNotes(updatedNotes);
        }

      };
    
      const handleTitleChange = (event) => {
        console.log(event.target.value.length);
        if (event.key === 'Enter') {
        setTitle(event.target.value);
        setIsEditing(false);
        }
      }

      const handleInputChange = (event) => {
        if(event.key === 'Enter'){
          handleNoteClick();
        }else if(event.target.value.length > 100){
          setStyle({width: '80%', border: '1px solid red', outline: 'none'})
        }else{
          setStyle({width: '80%', border: '1px solid blue', outline: 'none'})
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
        }).then(()=>{navigate('/home');})
        
      }

    return( 
        <>
        <Navbar></Navbar>
        {
                isEditing ? 
                <input type = 'text' onKeyDown={handleTitleChange} defaultValue = {title}/> 
                : <h1 onDoubleClick ={()=> setIsEditing(true)}>{title}</h1>
        }
        <input id="noteinput" style={style} type="text" onKeyDown={handleInputChange} placeholder="Enter a new note" />
        <button onClick={handleNoteClick}>Add note</button>
        <button onClick={handleSaveClick}>Save and close</button>
        {notes.map((note, i)=>(<p key={i}>{note.note}</p>))}
        </>
        
    )
}

export default NewSession;