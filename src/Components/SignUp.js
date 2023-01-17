import React, { useState } from "react";
import "./SignUp.css";
import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function SignUp({ setClient }) {
  const navigate = useNavigate();
  const [name, setUsername] = useState("");
  const [phone_number, setPhone_Number] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        phone_number,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setClient(data.client);
          navigate("/dashboard");
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
              <h3>Hello, please sign up to access muscleUp</h3>
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
