import React from "react";
import "./Dashboard.css";
import Dashnav from "./Dashnav";
import Time from "./Time";
import ClientDiet from "./ClientDiet";
import "animate.css";
import Exercise from "./Exercise";
import ProgressIcon from "./ProgressIcon";
import Card from "./Card";
import DietCard from "./DietCard";
import SupplementCard from "./SupplementCard";

const Dashboard = ({ client, clientExercise, removeFromClientExercise, clientDiet, removeFromClientDiet, clientSupplement, removeFromClientSupplement }) => {

  const { name, image, weight,level,  target_weight } = client;
  // console.log(clientExercise)
  const exer = clientExercise.map((exercise) => {
    // console.log(exercise)
    return (
      <Card key={exercise.id} exercise={exercise} handleExercise={removeFromClientExercise}/>
    )
  })

  const food = clientDiet.map((diet) => {
    return (
      <DietCard key={diet.id} diet={diet} handleDiet={removeFromClientDiet}/>
    )
  })

  const supp = clientSupplement.map((supplement) => {
    return (
      <SupplementCard key={supplement.id} supplement={supplement} handleSupplement={removeFromClientSupplement}/>
    )
  })

  console.log(client)

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
              src={image}
              alt=""
            />
          </div>
          <div className="dash-about">
            <h2>{name}</h2>
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
              <li>Weight:{weight}:</li>
              <li>Level:{level}:</li>
            </div>
            <div className="target-weight">
              <p>Target Weight: {target_weight}:</p>
            </div>
            <div>
              <Time />
            </div>
          </div>
          <div className="daily-progress">
            <div className="my-daily-excercises">
              <h2>My Excercises</h2>
              <div className="exercise-dash">
              {exer}
              </div>
              <h2>My Diet</h2>

              <div className="exercise-dash">
              {food}
              </div>
              <h2>My Supplements</h2>

              <div className="exercise-dash">
              {supp}
              </div>
            </div>

            {/* <div className="progress-container">
              
              <div className="progress-bar">
                <h2 className="header">My Progress</h2>
                <ProgressIcon percentProgress={0.4} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <Exercise/> */}
    </div>
  );
};
export default Dashboard;
