import React from 'react'
import "./Dashnav.css"
const Dashnav = () => {
  return (
    <div className='sidebar'>
        <div className='logo'>
          <h1>Muscle up</h1>
        </div>
        <div className="links">
            <ul>
              <li className='nav-link'><a href=''>Dashboard</a></li>
              <li className='nav-link'><a href=''>Logout</a></li>
            </ul>
        </div>
    </div>
  )
}
export default Dashnav