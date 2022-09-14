import React from "react";
//import PropTypes from "prop-types";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export const CardWrapper = styled.div`
  padding: 3%;
  width: 80%;
  margin: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;



function Session(props) {

    let { id } = useParams();

    let data = props.sessions.find(session => session.id === +id)
    console.log(data)


    return (
      <CardWrapper>
        <Navbar></Navbar>
        <h1>Hi from {data.name}</h1>
        <h2>Session recorded at {data.date}</h2>
            
        {!data.topics && data.notes.map((note, i) => (<p>{note.note}</p>))}
        {data.topics && data.topics.map((topic, i) => (
            <div>
              <h4>{topic.topic}</h4>
              {data.notes && data.notes.map((note, i) => (
                <p>{topic.id === note.topic_id && note.note}</p>
              )
              
              )}
            </div>
            ))}
      </CardWrapper>
    );
  }
  
  // Dashboard.propTypes = {
  //   checkins: PropTypes.array.isRequired
  // };
  
  export default Session;