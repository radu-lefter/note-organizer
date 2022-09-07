import React from "react";
//import PropTypes from "prop-types";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export const CardWrapper = styled.div`
  padding: 3%;
  width: 80%;
  margin: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display: flex;
`;



function Session(props) {

    let { id } = useParams();

    let data = props.sessions.find(session => session.id == id)
    console.log(data)


    return (
      <CardWrapper>
        <h1>Hi from {data.name}</h1>
      </CardWrapper>
    );
  }
  
  // Dashboard.propTypes = {
  //   checkins: PropTypes.array.isRequired
  // };
  
  export default Session;