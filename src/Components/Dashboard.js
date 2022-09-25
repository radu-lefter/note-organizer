import React from 'react';

//import PropTypes from "prop-types";
import styled from 'styled-components';
import Card from './Card';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { db } from '../config/firebase-config';
import { doc, deleteDoc, collection, getDocs, query, where } from 'firebase/firestore';
import RotateLoader from 'react-spinners/ClipLoader';
import { useUserAuth } from "../context/userAuthContext";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NewContainer = styled.div`
  flex: 1 0 200px;
  box-sizing: border-box;
  margin: 1rem 0.25em;
  padding: 0.5rem;
  background-color: #4682b4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 40em) {
    max-width: calc(50% - 1em);
  }

  @media screen and (min-width: 60em) {
    max-width: calc(25% - 1em);
  }
`;

const Button = styled.button`
  background: black;
  color: white;
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px blue;
  }
`;

function Dashboard() {
  const { user } = useUserAuth();
  const [data, setData] = useState([]);


  const handleSessionDel = async (id) => {
    const docRef = doc(db, 'sessions', id);
    await deleteDoc(docRef).then(() => {
      console.log('Document deleted');
      window.location.reload(false);
    });
  };

  useEffect(() => {
    async function getDocument() {
        const newdata = [];
        const q = query(collection(db, "sessions"), where("user", "==", user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          newdata.push({ id: doc.id, session: doc.data() });
          setData(newdata);
        });
    }
    getDocument();
    
  }, [user.uid]);

  if (!data) {
    return (
      <div>
        <RotateLoader color="red" loading="true" size={150} />
      </div>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <CardWrapper>
          <NewContainer>
            <Link to={`/newsession`}>
              <Button>Start a new session</Button>
            </Link>
          </NewContainer>
          {data.map((session, index) => (
            <Card
              key={index}
              id={session.id}
              name={session.session.name}
              date={session.session.date.seconds}
              topics={
                session.session.topics &&
                session.session.topics.map((a) => a.topic + ' ')
              }
              delSession={handleSessionDel}
            />
          ))}
        </CardWrapper>
      </Container>
    </>
  );
}

// Dashboard.propTypes = {
//   checkins: PropTypes.array.isRequired
// };

export default Dashboard;
