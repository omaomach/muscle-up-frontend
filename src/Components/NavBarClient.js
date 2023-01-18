import React from 'react'
import  './Dashboard.css';
import "./admin/AdminSideNav.css";

import { NavLink } from "react-router-dom";

export default function NavBarClient() {
  return (
    <div className="nav-admin">
    <div className="cli">
      <NavLink className="adm-links" style={{ textDecoration: "none" }} to="/dashboard">Dashboard</NavLink>
      <NavLink className="adm-links" style={{ textDecoration: "none" }} to="/diet">Diet</NavLink>
      <NavLink className="adm-links"style={{ textDecoration: "none" }} to="/exercise">Exercise</NavLink>
      <NavLink className="adm-links"style={{ textDecoration: "none" }} to="/supplements">Supplements</NavLink>

    </div>
  </div>
);
}
  
