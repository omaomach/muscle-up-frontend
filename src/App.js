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
import NewTrainer from './Components/admin/NewTrainer';

function App() {
  const [trainers, setTrainers] = useState([]);
  const [newUpdate, setNewUpdate] = useState();
  const [addingPerformance, setAddingPerformance] = useState(false);
  const [client, setClient] = useState(null)
  const [clientExercise, setClientExercise] = useState([])
  const [clientDiet, setClientDiet] = useState([])
  const [clientSupplement, setClientSupplement] = useState([])

  useEffect(() => {

    fetch("https://muscleup-production.up.railway.app/profile").then((response) => {
      if (response.ok) {
        response.json().then((client) => setClient(client));
      }
    });
  }, []);


  function updateResults(newTrainer) {
		// if newUpdate is defined update result if not defined add into the array
		if (newUpdate) {
			const index = trainers.findIndex(r => r.id === newTrainer.id);
      console.log(trainers)
			console.log(index)
			// updating form using index
			let latestUpdate = [...trainers];
			latestUpdate[index] = newTrainer;
			setTrainers(latestUpdate);

		} else {
			setTrainers([...trainers, newUpdate]);
		}
		setAddingPerformance(false);
	}

  function addToClientExercise(tizi) {
    // console.log(tizi)
    const updateExercises = clientExercise.find((exercise) => exercise.id === tizi.id)
    if (!updateExercises) setClientExercise([...clientExercise, tizi])
  }

  function addToClientDiet(chakula) {
    // console.log(tizi)
    const updateDiets = clientDiet.find((diet) => diet.id === chakula.id)
    if (!updateDiets) setClientDiet([...clientDiet, chakula])
  }

  function removeFromClientExercise(tizi) {
    const updateExercises = clientExercise.find((exercise) => exercise.id === tizi.id)
    if (updateExercises) {
      setClientExercise(
        clientExercise.filter((exercises) => exercises.id !== tizi.id)
      )
    }
  }

  function removeFromClientDiet(chakula) {
    const updateDiets = clientDiet.find((diet) => diet.id === chakula.id)
    if (updateDiets) {
      setClientDiet(
        clientDiet.filter((diets) => diets.id !== chakula.id)
      )
    }
  }

  function addToClientSupplement(sup) {
    const updateSupplements = clientSupplement.find((supplement) => supplement.id === sup.id)
    if (!updateSupplements) setClientSupplement([...clientSupplement, sup])
  }

  function removeFromClientSupplement(sup) {
    const updateSupplements = clientSupplement.find((supplement) => supplement.id === sup.id)
    if (updateSupplements) {
      setClientSupplement(
        clientSupplement.filter((supplements) => supplements.id !== sup.id)
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
            <Route path='/dashboard' element={<Dashboard client={client} clientExercise={clientExercise} removeFromClientExercise={removeFromClientExercise} clientDiet={clientDiet} removeFromClientDiet={removeFromClientDiet} clientSupplement={clientSupplement} removeFromClientSupplement={removeFromClientSupplement}/>} />
            <Route path='/admin' element={<Admin />} />
            <Route exact path="/adminclients" element={<Client/>}></Route>
            <Route exact path="/adminequipments" element={<Equipment />}></Route>
            <Route path="/admintrainers" element={<TrainersAdmin />}></Route> 
            <Route exact path="/newTrainer" onSaved={updateResults} defaultData={newUpdate} element={<NewTrainer />} />
            <Route exact path="/diet" element={<ClientDiet addToClientDiet={addToClientDiet}/>}></Route>
            <Route exact path="/exercise" element={<Exercise addToClientExercise={addToClientExercise}/>}></Route> 
            <Route exact path="/supplements" element={<Supplements addToClientSupplement={addToClientSupplement}/>}></Route> 

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
