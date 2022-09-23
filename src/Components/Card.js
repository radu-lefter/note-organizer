import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FaTrash  } from 'react-icons/fa';


const StyledContainer = styled.div`
  width: 25%;
  border: 1px solid;
  padding: 25px 12px 18px;
  background-color: #a9a9a9;
  margin: 5px;
`;

const Title = styled.h2`
  color: black;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
const Date = styled.div`
  color: black;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
const Description = styled.p`
  color: black;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

function Card({ id, name, date, topics, delSession }) {
  return (
    <StyledContainer>
      <Title>{name}</Title>
      <Date>{date}</Date>
      <Description>{topics}</Description>
      <Link to={`/session/${id}`}>Session</Link>
      <button onClick={()=> delSession(id)}><FaTrash  /></button>
    </StyledContainer>
  );
}
export default Card;
