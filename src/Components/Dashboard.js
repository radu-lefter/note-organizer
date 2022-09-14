import React from "react";
//import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./Card";
//import Session from "./Session";
//import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export const CardWrapper = styled.div`
  padding: 3%;
  width: 80%;
  margin: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display: flex;
`;

const NewContainer = styled.div`
  width: 25%;
  border: 1px solid;
  padding: 25px 12px 18px;
  background-color: #A9A9A9;
  margin: 5px`;


function Dashboard(props) {

    return (
      <>
      <Navbar></Navbar>
      <CardWrapper>
        
        <NewContainer>+ <Link to={`/newsession`}>New Session</Link></NewContainer>
        {props.sessions.map((session, index) => (<Card 
          key={index}
          id={session.id}
          name={session.name}
          date={session.date}
          topics={session.topics.map(a => a.topic + " ")}
        />))}
      </CardWrapper>
      </>
    );
  }
  
  // Dashboard.propTypes = {
  //   checkins: PropTypes.array.isRequired
  // };
  
  export default Dashboard;