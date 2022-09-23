import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import { FaTrash } from 'react-icons/fa';

const CardContainer = styled.div`
  flex: 1 0 200px;
  box-sizing: border-box;
  margin: 1rem 0.25em;
  padding: 0.5rem;
  background-color: #4682b4;
  border-radius: 5px;


  @media screen and (min-width: 40em) {
    max-width: calc(50% - 1em);
  }

  @media screen and (min-width: 60em) {
    max-width: calc(25% - 1em);
  }
`;

const Title = styled.h2`
  color: black;
  font-weight: 600;
  text-align: center;
`;
const DateRecorded = styled.div`
  color: black;
  font-weight: 500;
  margin: 6px 0;
  text-align: center;

`;
const Topics = styled.p`
  color: black;
  font-weight: 400;
  text-align: center;
`;

const Buttons = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

`;

const ButtonSession = styled.button`
  background: black;
  color: white;
  border-radius: 7px;
  padding: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px blue;
  }
`;

const ButtonSDelete = styled.button`
  background: red;
  color: white;
  border-radius: 7px;
  padding: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px blue;
  }
`;



function Card({ id, name, date, topics, delSession }) {
  return (
    <CardContainer>
      <Title>{name}</Title>
      <DateRecorded>
        {new Date(date * 1000).toLocaleString('en-GB', {
          timeZone: 'UTC',
        })}
      </DateRecorded>
      <Topics>{topics.length === 0 ? 'No topics to display' : topics}</Topics>
      
      <Buttons>
      <Link to={`/session/${id}`}><ButtonSession>Session</ButtonSession></Link>
      <ButtonSDelete onClick={() => delSession(id)}>Delete</ButtonSDelete>
      </Buttons>
    </CardContainer>
  );
}
export default Card;
