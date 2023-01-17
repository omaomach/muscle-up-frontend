import React, { useState, useEffect } from "react";
import AdminSidenav from "./AdminSideNav";
import "./Admin.css";

export default function Client() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/clients")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="container">
      <div className="admin-side">
        <AdminSidenav />
      </div>

      <div className="table">
        <h1>Clients</h1>
        <table>
          <thead className="head">
            <tr>
              <th>Avatar</th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Level</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => {
              return (
                <tr>
                  <td>
                    <img className="avatar client-av" src={client.image} />
                  </td>

                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.level}</td>
                  <td>{client.payment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
