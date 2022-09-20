import React from "react";

//import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./Card";
//import Session from "./Session";
//import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useEffect } from 'react';
import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

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


function Dashboard() {

  const [data, setData] = useState([]);

  async function getAllDocs() {
      const newdata = []
      const querySnapshot = await getDocs(collection(db, "sessions"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        newdata.push({id: doc.id, session: doc.data()});
      });
      setData(newdata);
    }

    useEffect(() => {
      getAllDocs();
    }, []);

    if (!data) {
      return <h2>data is loading</h2>;
    }

    return (
      <>
      <Navbar></Navbar>
      <CardWrapper>
        
        <NewContainer>+ <Link to={`/newsession`}>New Session</Link></NewContainer>
        {data.map((session, index) => (<Card 
          key={index}
          id={session.id}
          name={session.session.name}
          date={session.session.date.seconds}
          topics={session.session.topics && session.session.topics.map(a => a.topic + " ")}
        />))}
      </CardWrapper>
      </>
    );
  }
  
  // Dashboard.propTypes = {
  //   checkins: PropTypes.array.isRequired
  // };
  
  export default Dashboard;