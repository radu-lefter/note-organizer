import React from 'react';
import { useState, useEffect} from 'react';
//import { doc, updateDoc, arrayRemove, arrayUnion, setDoc } from "firebase/firestore";
//import { db } from "../config/firebase-config";
//import { useParams } from 'react-router-dom';


function Note (props) {

    const [isHovered, setHovered] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    //let { id } = useParams();
    //const sessRef = doc(db, 'sessions', id);

    // const handleNoteDel = () =>  {
        
    //     updateDoc(sessRef, {
    //         notes: arrayRemove(props.note)
    //     });
    //     window.location.reload(true);
    // }

    useEffect(() => {
      setIsEditing(props.editing);
    }, [props.editing]);


    return (
      <>
      {isEditing ? <input type = 'text' onKeyDown={(e) => props.updNote(e,props.note)} defaultValue = {props.note.note}/> :
        <p onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => setHovered(false)}
          onDoubleClick ={()=> setIsEditing(true)}
          >{props.note.note} | {isHovered && <>
          {/* <button
            style={{ marginRight: 5 + "px" }} 
          >
            Edit
          </button> */}
          <button onClick={() => props.delNote(props.note)}  type="submit">
            Delete
          </button></>}</p>
        }
        </>
    )

}


export default Note