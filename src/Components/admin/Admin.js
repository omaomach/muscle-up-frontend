import React from 'react'
import AdminSideNav from './AdminSideNav'
import "./Admin.css";
import NavBaradmin from './NavBaradmin';
import Client from './Client';
import Equipment from './Equipment';
import Trainers from './Trainers';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




export default function Admin() {
  return (
    <div className='admin-container'>
        <div className='admin-side'>
        <AdminSideNav/>
        </div>
        <div className='navbar-admin'>
    <Router>
          <NavBaradmin />
          <Routes>
            <Route exact path="/client" element={<Client />}></Route>           
            <Route path="/equipment" element={< Equipment/>} ></Route>
            <Route path="/trainers" element={< Trainers/>} ></Route>

          </Routes>
        </Router>

</div>

    </div>
  )
}
