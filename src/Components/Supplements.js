import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Dashnav from "./Dashnav";
import SupplementCard from "./SupplementCard";
import "./Card.css"
import "./styles.css"
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Supplements({ addToClientSupplement }) {
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
      <div className="client-side">
        <Dashnav />
      </div>
      <div id="trainers" className="exer-height">
        {/* <h1 style={{ textAlign: "center" }}>Supplements</h1> */}
        {supplements.map((supplement, i) => (
          <SupplementCard key={i} supplement={supplement} handleSupplement={addToClientSupplement}/>
        ))}
      </div>
    </div>
  );
}