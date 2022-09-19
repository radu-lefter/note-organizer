import React from 'react';
import { useState } from 'react';
import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useParams } from 'react-router-dom';


function Note (props) {

    const [isHovered, setHovered] = useState(false);

    let { id } = useParams();
    const sessRef = doc(db, 'sessions', id);

    const handleNoteDel = () =>  {
        //console.log(id);

        //sessRef.update(`notes.${id}`, FieldValue.delete()

        updateDoc(sessRef, {
            notes: arrayRemove(props.note)
        });
    }

    return (
        <p onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => setHovered(false)}>{props.note.note}{isHovered && <><button
            style={{ marginRight: 5 + "px" }}
            className="btn btn-warning" 
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => handleNoteDel()}  type="submit">
            Delete
          </button></>}</p>
    )

}


export default Note