import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Admin.css";

export default function NavBaradmin() {
  return (
    <div className='nav-admin'>
    <NavLink className="nav-links" style={{ textDecoration: 'none' }} to="/client"><h4>CLIENTS</h4></NavLink>
    <NavLink className="nav-links" style={{ textDecoration: 'none' }} to="/equipment"><h4>EQUIPMENT</h4></NavLink>
    <NavLink className="nav-links" style={{ textDecoration: 'none' }} to="/trainers"><h4>TRAINERS</h4></NavLink>

  </div>
  )
}
