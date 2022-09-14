import './App.css';
import data from "./data.json";
import Dashboard from "./Components/Dashboard.js";
import { Routes, Route } from "react-router-dom"
import Session from "./Components/Session";
import NewSession from "./Components/NewSession";




function App() {

//   const getAllDocs = async () => {
//     const data = await getDocs(collection(db, "sessions"));
//     return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//  };

 

//   async function getAllDocs() {
//     const newdata = []
//   const querySnapshot = await getDocs(collection(db, "sessions"));
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     newdata.push({id: doc.id, session: doc.data()});
    
//     //console.log(doc.id, " => ", doc.data());
//   });
//   return newdata;
// }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Dashboard sessions={data}/> } />
        <Route path="newsession" element={ <NewSession /> } />
        <Route path="session/:id" element={ <Session sessions={data}/> } />
      </Routes> 
    </div>
  );
}

export default App;
