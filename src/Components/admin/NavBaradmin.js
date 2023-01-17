import React from "react";
import { NavLink } from "react-router-dom";
import "./Admin.css";
import { Link } from "react-router-dom";


export default function NavBaradmin() {
  return (
    <div className="nav-admin">
      <div className="cli">
        <NavLink className="adm-links" style={{ textDecoration: "none" }} to="/">
          <a >Clients</a>
        </NavLink>
        <NavLink className="adm-links" style={{ textDecoration: "none" }} to="/trainers">
          <a >Trainers</a>
        </NavLink>
        <NavLink className="adm-links"style={{ textDecoration: "none" }} to="/equipment">
          <a>Equipment</a>
        </NavLink>
      </div>
    </div>
  );
}
