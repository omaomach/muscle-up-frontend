import React from "react";
import "./admin/AdminSideNav.css";
import NavBarClient from "./NavBarClient";
import { NavLink, useNavigate } from 'react-router-dom'

const Dashnav = () => {
  return (
    <div className="admin-sidebar">
      <div className="logo">
        <h1>MuscleUp</h1>
      </div>


      <div className="border-btm">

      </div>
      <NavBarClient />
      <NavLink to="/login"><button className="admin-btn" type="submit">Logout</button></NavLink>
    </div>
  );
};
export default Dashnav