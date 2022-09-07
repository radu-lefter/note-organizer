import './App.css';
import data from "./data.json";
import Dashboard from "./Components/Dashboard.js";

function App() {
  return (
    <div className="App">
      <Dashboard sessions={data}/>
    </div>
  );
}

export default App;
