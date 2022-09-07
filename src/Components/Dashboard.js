import React from "react";
//import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./Card";
//import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'

export const CardWrapper = styled.div`
  padding: 3%;
  width: 80%;
  margin: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display: flex;
`;


function Dashboard(props) {




    return (
      <CardWrapper>
        {props.sessions.map((session, index) => (<Card
          key={index}
          name={session.name}
          date={session.date}
          topics={session.topics.map(a => a.topic + " ")}
        />))}
        {/* <Card
          name={props.sessions[0].name}
          date={props.sessions[0].date}
          topics={props.sessions[0].topics.map(a => a.topic + " ")}
        /> */}
      </CardWrapper>
    );
  }
  
  // Dashboard.propTypes = {
  //   checkins: PropTypes.array.isRequired
  // };
  
  export default Dashboard;