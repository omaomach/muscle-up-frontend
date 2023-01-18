import React, { useState, useEffect } from "react";
import AdminSidenav from "./AdminSideNav";
import styled from "styled-components";
import Button from "./style/Button";
import { Delete } from "./delete";
import "./Admin.css";

export default function Client() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("https://muscleup-production.up.railway.app/clients")
      .then((r) => r.json())
      .then((data) => setClients(data));
  }, []);

  function onDelete(id){
    Delete(id).then(resp => {
      const index = clients.findIndex(r => r.id === id);
      console.log(index)
      let latestUpdate = [...clients];
      latestUpdate.splice(index, 1);
      setClients(latestUpdate);
    })
  }

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
			            <Button color="primary" type="delete" onClick={() =>onDelete(client.id)}>DELETE</Button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
