import './App.css';
//import data from "./data.json";
import Dashboard from "./Components/Dashboard.js";
import { Routes, Route } from "react-router-dom"
import Session from "./Components/Session";
import NewSession from "./Components/NewSession";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="newsession" element={ <NewSession /> } />
        <Route path="session/:id" element={ <Session /> } />
      </Routes> 
    </div>
  );
}

export default App;
