import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 25%;
  border: 1px solid;
  padding: 25px 12px 18px;
  background-color: #A9A9A9`;

const Title = styled.h2`
  color: black;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Date = styled.div`
  color: black;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`
const Description = styled.p`
  color: black;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

const Card = ({
  name,
  date,
  topics
}) => (
  <StyledContainer>
    <Title>{name}</Title>
    <Date>{date}</Date>
    <Description>{topics}</Description>
  </StyledContainer>
)
export default Card