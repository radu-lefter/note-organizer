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
        <p>
          This application was designed for taking notes during a lecture or any
          teaching session. The idea behind it is to take as many notes as fast
          as possible, so in the first stage the user can only input notes and
          edit the title. The session is saved for later revision.
        </p>
        <p>
          In the revision stage the user can add topics and assign the notes to
          them. The title, notes and topics are editable and hooverable for more
          functionality. It is encouraged that the summary field be completed
          based on the notes.
        </p>

        <h2>How to use the app</h2>
        <ul>
          <li>You can edit the title by double clicking on it</li>
          <li>You can edit the notes by double clicking on them</li>
          <li>You can add topics</li>
          <li>You can edit the topics by double clicking on them</li>
          <li>You can assign notes to topics for vetter organisation</li>
        </ul>
      </Container>
    </>
  );
}

export default About;
