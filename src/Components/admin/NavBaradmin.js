import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./style/Button";
import { Link } from "react-router-dom";
import "./Admin.css";
import { useNavigate } from "react-router-dom";




export default function NavBaradmin() {
 
  return (
    <div className="nav-admin">
      <div className="cli">
        <NavLink className="adm-links" style={{ textDecoration: "none" }} to="/adminclients">Clients</NavLink>
        <NavLink className="adm-links" style={{ textDecoration: "none" }} to="/admintrainers">Trainers</NavLink>
        <NavLink className="adm-links"style={{ textDecoration: "none" }} to="/adminequipments">Equipment</NavLink>

      </div>
    </div>
  );
}
