import Dashboard from "./Components/Dashboard.js";
import { Routes, Route } from "react-router-dom"
import Session from "./Components/Session";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import NewSession from "./Components/NewSession";
import { UserAuthContextProvider } from "./context/userAuthContext";


function App() {

  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
        <Route path="/home" element={ <ProtectedRoute><Dashboard /></ProtectedRoute>  } />
        <Route path="newsession" element={ <ProtectedRoute><NewSession /></ProtectedRoute> } />
        <Route path="session/:id" element={ <Session /> } />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> 
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
