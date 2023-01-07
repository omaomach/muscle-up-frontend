import React from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../Navbar.css"

function NavBar() {
  return (
    
    <div className='navbar'>
      <div className='muscleup'>
        <HashLink to="/"><h1>muscleUp</h1></HashLink>
      </div>

      <div className='nav-components'>
          <HashLink style={{ textDecoration: 'none' }} smooth to="/"><h4>Home</h4></HashLink>
          <HashLink style={{ textDecoration: 'none' }} smooth to="/#about"><h4>About</h4></HashLink>
          <HashLink style={{ textDecoration: 'none' }} smooth to="/#services"><h4>Services</h4></HashLink>
          <HashLink style={{ textDecoration: 'none' }}  smooth to="/#trainers"><h4>Trainers</h4></HashLink>
          <HashLink style={{ textDecoration: 'none' }} smooth to="/#contacts"><h4>Contacts</h4></HashLink>
          
          <div className='log-sign'>
            <NavLink style={{ textDecoration: 'none' }} to="/login"><h4>Login</h4></NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/signup"><h4>Sign Up</h4></NavLink>
          </div>

      </div>

    </div>
  )
}
export default NavBar;