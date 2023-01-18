import React, { useState, useEffect } from "react";
import AdminSidenav from "./AdminSideNav";
import styled from "styled-components";
import Button from "./style/Button";
import { tDelete } from "./delete";
import "./Admin.css";
import "./Client.css"

export default function TrainersAdmin() {
  const [trainers, setTrainers] = useState([]);
  const token = localStorage.getItem("jwt")

  useEffect(() => {
    fetch("https://muscleup-production.up.railway.app/trainers", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((r) => r.json())
      .then((data) => setTrainers(data));
  }, []);

  function onDelete(id){
    tDelete(id).then(resp => {
      const index = trainers.findIndex(r => r.id === id);
      console.log(index)
      let latestUpdate = [...trainers];
      latestUpdate.splice(index, 1);
      setTrainers(latestUpdate);
    })
  }


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
            {trainers.map((trainer) => {
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
                  <Button color="primary" type="delete" onClick={() =>onDelete(trainer.id)}>DELETE</Button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
