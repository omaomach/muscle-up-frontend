import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Admin.css";

export default function NavBaradmin() {
    return (
        <div className='nav-admin'>
       
            
                <li className='dash-links'><a href='#clients'>Clients</a></li>
                <li className='dash-links'><a href='#equipment'>Equipment</a></li>
                <li className='dash-links'><a href='#trainers'>Trainers</a></li>
            
        </div>
    )
}
