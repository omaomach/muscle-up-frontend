import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Dashnav from "./Dashnav";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Supplements() {
  const [supplements, setSupplements] = useState([]);
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    fetch("https://muscleup-production.up.railway.app/supplements", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then((data) => setSupplements(data));
  }, []);
  return (
    <div className="container">
      <div className="admin-side">
        <Dashnav />
      </div>
      <div id="trainers" className="diet-height">
        <h1 style={{ textAlign: "center" }}>Supplements</h1>
        <div className="trainers client-diet">
          {supplements.map((supplement, i) => (
            <div key={i} className="card diet-card">
              <img
                src={supplement.image}
                
                className="card-img"
              />
              <div className="card-info">
                <h3>Name: {supplement.name}</h3>

                <p>
                  <span className="spec">Amount: {supplement.amount}</span> 
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}