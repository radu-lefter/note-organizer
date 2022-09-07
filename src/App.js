import './App.css';
import data from "./data.json";
import Dashboard from "./Components/Dashboard.js";
import { Routes, Route } from "react-router-dom"
import Session from "./Components/Session";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Dashboard sessions={data}/> } />

        <Route path="session/:id" element={ <Session sessions={data}/> } />
 

      </Routes> 
    </div>
  );
}

export default App;
