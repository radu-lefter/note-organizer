import React from 'react';
import { useState } from 'react';

function Note(props) {

  const [isHovered, setHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [selectValue, setSelectValue] = useState(null);
  const [error, setError] = useState("");


  const handleEditing = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };

  const handleSelect = (event) => {
    setSelectValue(event.target.value)

  };

  const handleAddTopic = () => {
    if(props.topics.length > 0){
      setSelectValue(props.topics[0].id);
      setShowSelect(true);
      setError("");
    }else{
      setError("Please add topics first");
    }
    
    
  };

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          onKeyDown={(e) => props.updNote(e, props.note)}
          onKeyUp={handleEditing}
          defaultValue={props.note.note}
        />
      ) : (
        <>
          <p
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => setHovered(false)}
            onDoubleClick={() => setIsEditing(true)}
          >
            {props.note.note} |{' '}
            {isHovered && (
              <>
                <button onClick={() => props.delNote(props.note)} type="submit">
                  Delete
                </button>
                <button onClick={handleAddTopic} type="submit">
                  Add topic
                </button>
              </>
            )}
          </p>
          {showSelect ? (
            <>
              <select value={selectValue} 
                      onChange={handleSelect} >
                {props.topics.map((topic, i) => (<option key={i} value={topic.id}>{topic.topic}</option>))}
              </select>
              <button onClick={() => props.setTopic(selectValue, props.note)} type="submit">
                Assign topic
              </button>
            </>
          ) : (
            ''
          )}
        </>
      )}
      <p>{error}</p>
    </>
  );
}

export default Note;
