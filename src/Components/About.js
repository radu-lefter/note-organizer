import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

export const Container = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

// export const Section = styled.div`
//   width: 80%;
//   margin: auto;
//   padding: 20px;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
//   border-radius: 5px;
// `;

function About() {
  return (
    <>
      <Navbar />
      <Container>
        <h1>About the appplication</h1>
        <h2>Who is this app for</h2>
        <p>This application was design for taking notes during a lecture or any teaching session.</p>
        <h2>How to use the app</h2>
        <p>You can edit the titles by double clicking on them</p>
        <p>You can edit the notes by double clicking on them</p>
      </Container>
    </>
  );
}

export default About;
