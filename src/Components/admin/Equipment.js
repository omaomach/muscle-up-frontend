import React from "react";
import AdminSidenav from "./AdminSideNav";
import "./Admin.css";

export default function Equipment() {
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
            <tr>
              <td>
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/14007218/pexels-photo-14007218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </td>
              <td>1</td>
              <td>Mark</td>
              <td>0728300345</td>

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

              <td>complete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
