import React, { useState, useEffect } from "react";
import Card from "./Card";
import Carousel from "react-elastic-carousel";
import Dashnav from "./Dashnav";
import "./styles.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
// const trainers = [
//   { name: "John Doe", specialty: "Boxing", imageUrl: "https://images.pexels.com/photos/4398884/pexels-photo-4398884.jpeg?auto=compress&cs=tinysrgb&w=1600" },
//   { name: "Jane Smith", specialty: "Kickboxing", imageUrl: "https://images.pexels.com/photos/6635223/pexels-photo-6635223.jpeg?auto=compress&cs=tinysrgb&w=1600" },
//   { name: "Bob Johnson", specialty: "MMA", imageUrl: "https://images.pexels.com/photos/6295829/pexels-photo-6295829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
//   { name: "Bruce Lee", specialty: "Martial-arts", imageUrl: "https://images.pexels.com/photos/7045748/pexels-photo-7045748.jpeg?auto=compress&cs=tinysrgb&w=1600" },
//   { name: "Samantha Brown", specialty: "Yoga", imageUrl: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
//   { name: "Davis Wayne", specialty: "CrossFit", imageUrl: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1600" },

// ]
export default function Excercise({ addToClientExercise }) {
  const [exercises, setExercises] = useState([]);
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    fetch("https://muscleup-production.up.railway.app/exercises", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((data) => setExercises(data));
  }, []);

  return (
    <div className="container die-cont">
      <div className="admin-side">
        <Dashnav />
      </div>
      <div id="trainers" className="exer-height">
        <h1 style={{ textAlign: "center" }}>Excercises</h1>
        {exercises.map((exercise, i) => (
          <Card key={i} exercise={exercise} handleExercise={addToClientExercise}/>
        ))}
      </div>
    </div>
  );
}
