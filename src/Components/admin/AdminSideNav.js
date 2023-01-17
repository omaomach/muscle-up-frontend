import React from "react";
import "./AdminSideNav.css";
import NavBaradmin from "./NavBaradmin";

const AdminSidenav = () => {
  return (
    <div className="admin-sidebar">
      <div className="logo">
        <h1>MuscleUp</h1>
      </div>
      <div className="admin-image">
        <img
          className="admin-img"
          src="https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
      </div>

      <h2>Administrator</h2>
      <div className="border-btm">

      </div>
      <NavBaradmin/>

      <button className="admin-btn" type="submit">
      Logout
      </button>
    </div>
  );
};
export default AdminSidenav;
