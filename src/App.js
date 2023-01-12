import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Services from './Components/Services';
import Trainers from './Components/Trainers';
import Contacts from './Components/Contacts';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Admin from './Components/admin/Admin';
function App() {
  return (
    <div className="App">
      <div>
        {/* <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/trainers" element={<Trainers />}></Route>
            <Route path="/contacts" element={<Contacts />} ></Route>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/signup" element={<SignUp />} ></Route>
          </Routes>
        </Router> */}
        {/* <Dashboard/> */}
        <Admin/>

      </div>
    </div>
  );
}

export default App;
