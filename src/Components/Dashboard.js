import React from "react";
import "./Dashboard.css";
import Dashnav from "./Dashnav";
import Time from "./Time";
import ClientDiet from "./ClientDiet";
import 'animate.css';
import Exercise from "./Exercise";
const Dashboard = () => {
  return (
    <div className="admin-container">
      <div className="admin-side">
      <Dashnav className="nav"></Dashnav>
      </div>
      <div className="client-details">
        <div className="client">
          <div className="dash-img">
            
            <img
              className="client-img"
              src="https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
          </div>
          <div className="dash-about">
            <h2>John Doe</h2>
            <p className="about-client">
              {" "}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,quis nostrud exercitation ullamco ."
            </p>
          </div>
        </div>
        <h2 className="header">My Journey</h2>
        <div className="details-container">
          <div className="stats">
            <div className="client-status">
              <li>Height:</li>
              <li>Weight:</li>
              <li>Age:</li>
            </div>
            <div className="payment">
              <p>Payment:</p>
            </div>
            <div>
              <Time />
            </div>
          </div>
     
        </div>
      </div>
{/* <Exercise/> */}

    </div>
  );
};
export default Dashboard