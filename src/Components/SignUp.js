import React, { useState } from "react";
import "./SignUp.css";
import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
// import Dashboard from "./Dashboard";

function SignUp({ setClient }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [name, setUsername] = useState("");
  const [phone_number, setPhone_Number] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [weight, setWeight] = useState("");
  const [target_weight, setTarget_Weight] = useState("");
  const [level, setLevel] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://muscleup-production.up.railway.app/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        phone_number,
        email,
        image,
        weight,
        target_weight,
        level,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data.client);
          setClient(data.client);
          navigate("/dashboard" , { state: { user: data.client } });
          localStorage.setItem("jwt", data.jwt);
        });
      }
    });
  }

  return (
    <>

    <NavBar />


      <div className="main-parent">
        <div className="right">
          <div className="sign-up-components">
            <div className="sign-up-header">
              <h3>Hello, please Sign Up</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                className="username"
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                id="email"
                className="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                id="phone_number"
                className="phone_number"
                placeholder="Phone Number"
                required
                onChange={(e) => setPhone_Number(e.target.value)}
              />
              <input
                type="text"
                id="image"
                className="avatar"
                placeholder="Avatar"
                required
                onChange={(e) => setImage(e.target.value)}
              />
              <input
                type="number"
                id="weight"
                className="weight"
                placeholder="Your Weight in Kg"
                required
                onChange={(e) => setWeight(e.target.value)}
              />
              <input
                type="number"
                id="target_weight"
                className="target_weight"
                placeholder="Your Target Weight"
                required
                onChange={(e) => setTarget_Weight(e.target.value)}
              />
              <select id="level" className="level" value={level} onChange={(e) => setLevel(e.target.value)} required>
                <option value={0}>Select Gym Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
              <input
                type="password"
                id="password"
                className="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                id="password_confirmation"
                className="password"
                placeholder="Password Confirmation"
                required
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              <button className="signup" type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <div className="login-text">
            <NavLink to="/login">
              <p>Already a member? Login</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
   
  );
}

export default SignUp;
