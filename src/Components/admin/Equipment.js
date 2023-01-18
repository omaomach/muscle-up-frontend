import React, { useState, useEffect } from "react";
import AdminSidenav from "./AdminSideNav";
import styled from "styled-components";
import Button from "./style/Button";
import { eDelete } from "./delete";
import "./Admin.css";
import "./Client.css"

export default function Equipment() {
  const [machines, setMachines] = useState([]);
  const token = localStorage.getItem("jwt")

  useEffect(() => {
    fetch("https://muscleup-production.up.railway.app/machines", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((r) => r.json())
      .then((data) => setMachines(data));
  }, []);

  function onDelete(id){
    eDelete(id).then(resp => {
      const index = machines.findIndex(r => r.id === id);
      console.log(index)
      let latestUpdate = [...machines];
      latestUpdate.splice(index, 1);
      setMachines(latestUpdate);
    })
  }

  return (
    <div className="container">
      <div className="admin-side">
        <AdminSidenav />
      </div>

      <div className="table">
        <h1>Equipment</h1>
        <table>
          <thead className="head">
            <tr>
              <th>Avatar</th>
              <th>Id</th>
              <th>Name</th>
              <th>Condition</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {machines.map((machine) => {
              return (
                <tr>
                  <td>
                    <img className="avatar" src={machine.image} />
                  </td>

                  <td>{machine.id}</td>
                  <td>{machine.name}</td>
                  <td>{machine.condition}</td>
                  <td>{machine.number}</td>
                  <Button color="primary" type="delete" onClick={() =>onDelete(machine.id)}>DELETE</Button>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
