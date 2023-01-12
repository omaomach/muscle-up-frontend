import React from 'react'
import "./AdminSideNav.css";



const AdminSidenav  = () => {
  return (
    <div className='admin-sidebar'>
        <div className='logo'>
          <h1>Muscle up</h1>
        </div>
        <div className="dash-img">
            <img
              className="admin-img"
              src="https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
          </div>

<h2>John Doe</h2>
<h2>Admin</h2>


<button className="admin-btn" type="submit">Logout</button>

    </div>
  )
}
export default AdminSidenav;