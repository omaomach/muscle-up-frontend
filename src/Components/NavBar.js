import React from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
function NavBar() {
  return (
    
    <div className='nav'>

      <div className='nav-link'>
        <ul>
        <h1 className='header'>MuscleUp</h1>

          <li className='nav-links'> <NavLink style={{ textDecoration: 'none' }} to="/">Home</NavLink> </li>
          <li className='nav-links'> <HashLink style={{ textDecoration: 'none' }} smooth to="/#about"> About</HashLink> </li>
          <li className='nav-links '> <HashLink style={{ textDecoration: 'none' }} smooth to="/#services">Services </HashLink> </li>
          <li className='nav-links'> <HashLink style={{ textDecoration: 'none' }}  smooth to="/#trainers">Trainers </HashLink> </li>
          <li className='nav-links'> <HashLink style={{ textDecoration: 'none' }} smooth to="/#contacts"> Contact Us</HashLink> </li>
          <li className='login-link'> <NavLink style={{ textDecoration: 'none' }} to="/login">Login</NavLink> </li>
          <li className='login-link'> <NavLink style={{ textDecoration: 'none' }} to="/signup">Sign Up</NavLink> </li>
        </ul>
      </div>


    </div>
  )
}
export default NavBar;