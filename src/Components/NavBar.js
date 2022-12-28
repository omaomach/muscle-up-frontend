import React from 'react'
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    
    <div className='nav'>

      <div className='nav-link'>
        <ul>
        <h1 className='header'>MuscleUp</h1>

          <li className='nav-links'> <NavLink style={{ textDecoration: 'none' }} to="/">Home</NavLink> </li>
          <li className='nav-links'> <NavLink style={{ textDecoration: 'none' }} to="/about"> About</NavLink> </li>
          <li className='nav-links '> <NavLink style={{ textDecoration: 'none' }} to="/services">Services </NavLink> </li>
          <li className='nav-links'> <NavLink style={{ textDecoration: 'none' }} to="/trainers">Trainers </NavLink> </li>
          <li className='nav-links'> <NavLink style={{ textDecoration: 'none' }} to="/contacts"> Contact Us</NavLink> </li>
          <li className='login-link'> <NavLink style={{ textDecoration: 'none' }} to="/login">Login</NavLink> </li>
          <li className='login-link'> <NavLink style={{ textDecoration: 'none' }} to="/signup">Sign Up</NavLink> </li>
        </ul>
      </div>


    </div>
  )
}
export default NavBar;