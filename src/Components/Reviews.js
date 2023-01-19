import React, { useState } from "react";
import Dashnav from "./Dashnav";
import "./Review.css";

function Reviews() {
  const [review, setReview] = useState("");
  const token = localStorage.getItem("jwt")

  function submitReview(e) {
    e.preventDefault()
    fetch('https://muscleup-production.up.railway.app/reviews',{
		method : "POST",
		body: JSON.stringify(review),
		headers:{
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		}
		
	}).then((resp) => resp.json())
  }

  return (
    <>
      <div className="container">
        <div className="admin-side">
          <Dashnav />
        </div>
        <div className="main-parent">
        {/* <Dashnav /> */}
        <div className="review-right">
          <div className="review-in-components">
            <div className="review-in-header">
              <h3>Give us your review on the gym services</h3>
            </div>
            <form onSubmit={submitReview}>
              <input
                type="text"
                id="review"
                className="review"
                placeholder="Your Review"
                value={review}
                required
                onChange={(e) => setReview(e.target.value)}
              />
              <button className="sign-in" type="submit">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>

      
    </>
  );
}

export default Reviews;
