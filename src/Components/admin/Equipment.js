import React, { useState, useEffect } from "react";
import AdminSidenav from "./AdminSideNav";
import "./Admin.css";
import "./Client.css"

export default function Equipment() {
  const [machines, setMachines] = useState([]);
  const token = localStorage.getItem("jwt")

  useEffect(() => {
    fetch("http://127.0.0.1:3000/machines", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((r) => r.json())
      .then((data) => setMachines(data));
  }, []);
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
