import React, { useState } from 'react'
import './NavBar.css'
import Dropdown from './Dropdown'
import { NavLink } from 'react-router-dom'
import logo2 from '../assets/images/logo2.png'




function NavBar() {

  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => {
    setClick(false)
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <div className='navbar'>
      <NavLink to='/' className='navbar-logo'>
        <img id="logo" src={logo2} alt='logo'></img>
      </NavLink>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li className='nav-item' 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
          <NavLink to='/About' className='nav-links' onClick={closeMobileMenu}>
            About <i className='fas fa-caret-down' />
          </NavLink>
          {/* dropdown menu */}
          {dropdown && <Dropdown />}
        </li>
        <li className='nav-item'onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
          <NavLink to='/About' className='nav-links' onClick={closeMobileMenu}>
            Projects <i className='fas fa-caret-down' />
          </NavLink>
          {/* dropdown menu */}
          {dropdown && <Dropdown />}
        </li>
      </ul>
    </div>
  )
}

export default NavBar