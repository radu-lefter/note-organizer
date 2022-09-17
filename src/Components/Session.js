import React from "react";
//import PropTypes from "prop-types";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";



export const CardWrapper = styled.div`
  padding: 3%;
  width: 80%;
  margin: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;



function Session(props) {

  let { id } = useParams();
  console.log(id)

  // const [data, setData] = useState([]);

  // async function getAllDocs() {
  //   const newdata = []
  //   const querySnapshot = await getDocs(collection(db, "sessions"));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     //newdata.push({id: doc.id, session: doc.data()});
  //     console.log(doc.id)
  //   });
  //   setData(newdata);
  // }

  //   useEffect(() => {
  //     getAllDocs();
  //   }, []);
  //console.log(props.sessions)
  let data = props.sessions.find(session => session.id === id)
  console.log(data)


    return (
      <CardWrapper>
        <Navbar></Navbar>
        <h1>Hi from {data.session.session.name}</h1>
        <h2>Session recorded at {data.session.session.date.seconds}</h2>
            
        {data.session.session.topics.length === 0 ? data.session.session.notes.map((note, i) => (<p>{note.note}</p>)): 
          data.session.session.topics.map((topic, i) => (
            <div>
              <h4>{topic.topic}</h4>
              {data.session.session.notes.length === 0 ? "" : data.session.session.notes.map((note, i) => (
                <p>{topic.id === note.topic_id ? note.note : ""}</p>
              )
              
              )}
            </div>
            ))}
             <div>
            <h4>Unorganized notes</h4>
          {data.session.session.notes.map((note, i) => (note.topic_id === null ? <p>{note.note}</p>: ""))}
            </div>
        {/* {data.session.session.topics && data.session.session.topics.map((topic, i) => (
            <div>
              <h4>{topic.topic}</h4>
              {data.session.session.notes && data.notes.session.session.map((note, i) => (
                <p>{topic.id === note.topic_id && note.note}</p>
              )
              
              )}
            </div>
            ))} */}
      </CardWrapper>
    );
  }
  
  // Dashboard.propTypes = {
  //   checkins: PropTypes.array.isRequired
  // };
  
  export default Session;