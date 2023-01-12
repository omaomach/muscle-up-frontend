import React from "react";
import "./AdminSideNav.css";
import NavBaradmin from "./NavBaradmin";

const AdminSidenav = () => {
  return (
    <div className="admin-sidebar">
      <div className="logo">
        <h1>Muscle up</h1>
      </div>
      <div className="admin-image">
        <img
          className="admin-img"
          src="https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
      </div>

      <h2>Admin: <span>John Doe</span></h2>
      
      <NavBaradmin/>

      <button className="admin-btn" type="submit">
      Logout
      </button>
    </div>
  );
};
export default AdminSidenav;
