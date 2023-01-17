import React from "react";
import AdminSidenav from "./AdminSideNav";
import "./Admin.css";

export default function TrainersAdmin() {
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
              <th>Speciality</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/14007218/pexels-photo-14007218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="avatar"
                />
              </td>

              <td>1</td>
              <td>Mark</td>
              <td>0728300345</td>
              <td>mark@gmail.com</td>
              <td>complete</td>
            </tr>
            <tr>
              <td>
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/14007218/pexels-photo-14007218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </td>

              <td>2</td>

              <td>Mark</td>
              <td>0728300345</td>
              <td>mark@gmail.com</td>
              <td>complete</td>
            </tr>
            <tr>
              <td>
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/14007218/pexels-photo-14007218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </td>

              <td>3</td>

              <td>Mark</td>
              <td>0728300345</td>
              <td>mark@gmail.com</td>
              <td>complete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
