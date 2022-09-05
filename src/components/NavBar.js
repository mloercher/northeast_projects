import React, {useState } from 'react'
import './NavBar.css'
import Dropdown from './Dropdown'
import {Link} from 'react-router-dom'
import {logo} from '../assets/images/logo2.png'



function NavBar() {
  return (
    <>
    <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          logo
        </Link>
    </nav>
    </>
  )
}

export default NavBar