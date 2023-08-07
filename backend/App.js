import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./Main";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import Cars from "./cars";
import Housing from "./Housing"
import Jobs from "./Jobs"
import Services from "./Services"
import For_Sale from "./For_Sale"
import Nutrition from "./Nutrition"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        //<Main/>
        //<About/>
        //<Cars/>
        //<Housing/>
        //<Jobs/>
        //<Services/>
        //<For_Sale/>
        //<Nutrition/>
        //currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} /> 
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/home" element={<Main/>}/>
        </Routes>
      </Router>
      }
    </div>
  );
}

export default App;