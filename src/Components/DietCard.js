import React from "react";

function DietCard({ diet, handleDiet }) {
  return (
    <>
      <div className="trainers client-diet" onClick={() => handleDiet(diet)}>
          <div className="card diet-card">
            <img src={diet?.image} className="card-img" />
            <div className="card-info">
              <h3>{diet?.name}</h3>

              <p>
                <span className="spec">Diet Type:</span>
                {diet?.diet_type}
              </p>
            </div>
          </div>
      </div>
    </>
  );
}

export default DietCard;
