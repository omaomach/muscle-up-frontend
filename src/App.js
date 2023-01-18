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
import Supplements from './Components/Supplements';


function App() {
  const [client, setClient] = useState(null)
  const [clientExercise, setClientExercise] = useState([])


  useEffect(() => {
    fetch("http://127.0.0.1:3000/profile").then((response) => {
      if (response.ok) {
        response.json().then((client) => setClient(client));
      }
    });
  }, []);

  function addToClientExercise(tizi) {
    // console.log(tizi)
    const updateExercises = clientExercise.find((exercise) => exercise.id === tizi.id)
    if (!updateExercises) setClientExercise([...clientExercise, tizi])
  }

  function removeFromClientExercise(tizi) {
    const updateExercises = clientExercise.find((exercise) => exercise.id === tizi.id)
    if (updateExercises) {
      setClientExercise(
        clientExercise.filter((exercises) => exercises.id !== tizi.id)
      )
    }
  }

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
            <Route path='/dashboard'element={ <Dashboard client={client}clientExercise={clientExercise} removeFromClientExercise={removeFromClientExercise}/>}/>
            <Route path='/admin' element={<Admin />} />
            <Route exact path="/adminclients" element={<Client/>}></Route>
            <Route exact path="/adminequipments" element={<Equipment />}></Route>
            <Route path="/admintrainers" element={<TrainersAdmin />}></Route>
            <Route exact path="/diet" element={<ClientDiet/>}></Route>
            <Route exact path="/exercise" element={<Exercise addToClientExercise={addToClientExercise}/>}></Route> 
            <Route exact path="/supplements" element={<Supplements />}></Route> 


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
