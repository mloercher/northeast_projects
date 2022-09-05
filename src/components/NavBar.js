import React, {useState } from 'react'
import './NavBar.css'
import Dropdown from './Dropdown'
import {Link} from 'react-router-dom'
import logo2 from '../assets/images/logo2.png'



function NavBar() {
  return (
    <>
    <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
        <img id="logo" src={logo2} alt='logo'></img>
        </Link>
    </nav>
    </>
  )
}

export default NavBar