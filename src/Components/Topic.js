import React from 'react';
import { useState } from 'react';

function Topic(props) {
  const [isHovered, setHovered] = useState(false);
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
          onKeyDown={(e) => props.updTopic(e, props.topic)}
          onKeyUp={handleEditing}
          defaultValue={props.topic.topic}
        />
      ) : (
        <>
          <h4
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => setHovered(false)}
            onDoubleClick={() => setIsEditing(true)}
          >
            {props.topic.topic} |{' '}
            {isHovered && (
              <>
                <button onClick={() => props.delTopic(props.topic)} type="submit">
                  Delete
                </button>
              </>
            )}
          </h4>
        </>
      )}
    </>
  );
}

export default Topic;
