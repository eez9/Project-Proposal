import React, { useState } from "react";
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
import CreateListing from "./CreateListing"
import MyListing from "./MyListing"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/home" element={<Main/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/nutrition" element={<Nutrition/>}/>
          <Route path="/cars" element={<Cars/>}/>
          <Route path="/housing" element={<Housing/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/forsale" element={<For_Sale/>}/>
          <Route path="/CreateListing" element={<CreateListing/>}/>
          <Route path="/MyListing" element={<MyListing/>}/>
        </Routes>
      </Router>
      }
    </div>
  );
}

export default App;