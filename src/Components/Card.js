import React from "react";
import "./styles.css";

function Card({ exercise, handleExercise }) {
    console.log(exercise)
    return (
        <>
        <div className=" client-diet" onClick={() => handleExercise(exercise)}>
            <div className="card diet-card">
              <img src={exercise?.exercise_image} className="card-img" />
              <div className="card-info">
                <h3>{exercise?.name}</h3>
                <p>
                  <span className="spec">Type of Excercise:</span>{" "}
                  {exercise?.exercise_type}
                </p>
              </div>
            </div>
        </div>
        </>
    )

}

export default Card;