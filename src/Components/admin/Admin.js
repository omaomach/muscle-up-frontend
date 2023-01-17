import React from "react";
import AdminSideNav from "./AdminSideNav";
import "./Admin.css";
import NavBaradmin from "./NavBaradmin";
import Client from "./Client";
import Equipment from "./Equipment";
import Trainers from "./Trainers";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Admin() {
  
  return (
    <div className="admin-container">
      

        <Router>
        <div className="admin-side">
        
        <AdminSideNav />
        </div>
        
      <div className="navbar-admin">
          <Routes>
            <Route exact path="/" element={<Client/>}></Route>
            <Route exact path="/equipment" element={<Equipment />}></Route>
            <Route path="/trainers" element={<Trainers />}></Route>
            </Routes>
      </div>
        </Router>

        
    </div>
  );
}
