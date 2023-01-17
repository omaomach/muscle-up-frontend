import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import NavBar from "./NavBar";

function Login({ setClient }) {
  const navigate = useNavigate();
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setClient(data.client);
          if (data.client.admin) {
            navigate("/admin");
          } else {
            navigate("/dashboard");
          }

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
          <div className="sign-in-components">
            <div className="sign-in-header">
              <h3>Hello, please login to access Inkmasters</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                className="username"
                placeholder="Username"
                value={name}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                id="password"
                className="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="sign-in" type="submit">
                Login
              </button>
            </form>
          </div>
          <div className="login-text">
            <NavLink to="/signup">
              <p>Already a member? Sign Up</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
