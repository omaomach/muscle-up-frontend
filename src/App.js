import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import './App.css';
// import NavBar from './Components/NavBar';
import About from './Components/About';
import Services from './Components/Services';
import Trainers from './Components/Trainers';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Admin from './Components/admin/Admin';
import Client from "./Components/admin/Client";
import Equipment from "./Components/admin/Equipment";
import TrainersAdmin from "./Components/admin/TrainersAdmin";
import ClientDiet from './Components/ClientDiet';
import Exercise from './Components/Exercise';

function App() {
  const [client, setClient] = useState(null)


  useEffect(() => {

    fetch("https://muscleup-production.up.railway.app/profile").then((response) => {
      if (response.ok) {
        response.json().then((client) => setClient(client));
      }
    });
  }, []);

  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/trainers" element={<Trainers />}></Route>
            <Route path="/contacts" element={<Footer />} ></Route>
            <Route path="/login" element={<Login setClient={setClient}/>} ></Route>
            <Route path="/signup" element={<SignUp setClient={setClient}/>} ></Route>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/admin' element={<Admin />} />
            <Route exact path="/adminclients" element={<Client/>}></Route>
            <Route exact path="/adminequipments" element={<Equipment />}></Route>
            <Route path="/admintrainers" element={<TrainersAdmin />}></Route>
            <Route exact path="/diet" element={<ClientDiet/>}></Route>
            <Route exact path="/exercise" element={<Exercise/>}></Route> 


          </Routes>
          <Footer/>
          {/* <Dashboard/> */}
        </Router>
        {/* <Admin/> */}

      </div>
    </div>
  );
}

export default App;
