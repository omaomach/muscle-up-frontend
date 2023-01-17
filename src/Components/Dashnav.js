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
              <li className='dash'><a href='#'>Dashboard</a></li>
              <li className='logout'><a href=''>Logout</a></li>
              <li className='logout'><a href='Diets.js'>Diet</a></li>

            </ul>
        </div>
    </div>
  )
}
export default Dashnav