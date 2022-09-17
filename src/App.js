import './App.css';
//import data from "./data.json";
import Dashboard from "./Components/Dashboard.js";
import { Routes, Route } from "react-router-dom"
import Session from "./Components/Session";
import NewSession from "./Components/NewSession";
import { db } from "./config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';


function App() {

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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Dashboard data={data} /> } />
        <Route path="newsession" element={ <NewSession /> } />
        {/* <Route path="session/:id" element={ <Session /> } /> */}
        <Route path="session/:id" element={ <Session sessions={data}/> } />
      </Routes> 
    </div>
  );
}

export default App;
