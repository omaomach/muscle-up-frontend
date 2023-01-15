import React from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../Navbar.css"

function NavBar() {
  return (
    
    <div className='navbar'>
      <div className='muscleup'>
<h1>muscleUp</h1>
      </div>

      <div className='nav-components'>
          <HashLink style={{ textDecoration: 'none' }} smooth to="/#"><h4 className='hme'>Home</h4></HashLink>
          <HashLink style={{ textDecoration: 'none' }} smooth to="/#about"><h4 className='abt'>About</h4></HashLink>
          <HashLink style={{ textDecoration: 'none' }} smooth to="/#services"><h4 className='ser'>Services</h4></HashLink>
          <HashLink style={{ textDecoration: 'none' }}  smooth to="/#trainers"><h4 className='tra'>Trainers</h4></HashLink>
          <HashLink style={{ textDecoration: 'none' }} smooth to="/#contacts"><h4 className='cts'>Contacts</h4></HashLink>
          
          <div className='log-sign'>
            <NavLink style={{ textDecoration: 'none' }} to="/login"><h3 className='log'>Login</h3></NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/signup"><h3 className='sig'>Sign Up</h3></NavLink>
          </div>

      </div>

    </div>
  )
}
export default NavBar;