import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

function Dashboard(props) {

    
  
    return (
      <CardWrapper>
        <h1>{props.sessions[0].session_name}</h1>
      </CardWrapper>
    );
  }
  
  Dashboard.propTypes = {
    checkins: PropTypes.array.isRequired
  };
  
  export default Dashboard;