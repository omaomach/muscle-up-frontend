import React from "react";
import "./styles.css";

function SupplementCard({ supplement, handleSupplement }) {
  return (
    <>
      <div className="trainers client-diet" onClick={() => handleSupplement(supplement)}>
          <div className="card diet-card">
            <img src={supplement?.image} className="card-img" />
            <div className="card-info">
              <h3>Name: {supplement.name}</h3>

              <p>
                <span className="spec">
                  Amount per session in mm: {supplement?.amount}
                </span>
              </p>
            </div>
          </div>
      </div>
    </>
  );
}

export default SupplementCard;
