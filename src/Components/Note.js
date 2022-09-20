import React from 'react';
import { useState} from 'react';



function Note (props) {

    const [isHovered, setHovered] = useState(false);
    const [isEditing, setIsEditing] = useState(false);


    const handleEditing = (event) =>  {
        
      if (event.key === 'Enter') {
        setIsEditing(false);
      }
    }

    return (
      <>
      {isEditing ? <input type = 'text' onKeyDown={(e) => props.updNote(e,props.note)} onKeyUp={handleEditing} defaultValue = {props.note.note}/> :
        <p onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => setHovered(false)}
          onDoubleClick ={()=> setIsEditing(true)}
          >{props.note.note} | {isHovered && <>
          <button onClick={() => props.delNote(props.note)}  type="submit">
            Delete
          </button></>}</p>
        }
        </>
    )

}


export default Note