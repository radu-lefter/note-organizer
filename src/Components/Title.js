import React from 'react';
import { useState } from 'react';

function Title(props) {

  const [isEditing, setIsEditing] = useState(false);


  const handleEditing = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };


  return (
    <>
      {isEditing ? (
        <input
          type="text"
          onKeyDown={(e) => props.updTitle(e, props.topic)}
          onKeyUp={handleEditing}
          defaultValue={props.name}
        />
      ) : (
        <>
          <h1 
            onDoubleClick={() => setIsEditing(true)}
          >
            {props.name}
          </h1>
        </>
      )}
    </>
  );
}

export default Title;