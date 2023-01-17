import React, { useState, useEffect } from "react";
import AdminSidenav from "./AdminSideNav";
import "./Admin.css";
import "./Client.css"

export default function TrainersAdmin() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch("https://muscleup-production.up.railway.app/trainers")
      .then((r) => r.json())
      .then((data) => setTrainers(data));
  }, []);

  return (
    <div className="container">
      <div className="admin-side">
        <AdminSidenav />
      </div>

      <div className="table">
        <h1>Trainers</h1>
        <table>
          <thead className="head">
            <tr>
              <th>Avatar</th>

              <th>Id</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(trainers).length > 0 && trainers.map((trainer) => {
              return (
                <tr>
                  <td>
                    <img className="avatar" src={trainer.image} />
                  </td>

                  <td>{trainer.id}</td>
                  <td>{trainer.name}</td>
                  <td>{trainer.phone_number}</td>
                  <td>{trainer.email}</td>
                  <td>{trainer.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
