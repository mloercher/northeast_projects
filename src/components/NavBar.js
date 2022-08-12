import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import whiteLogo from '../images/whiteLogo.png'
import './NavBar.css'
// import Home from './Pages/Home'
// import { Button } from './Button'
import logo2 from '../assets/images/logo2.png'


function NavBar() {
  const [click, setClick] = useState(false)

  // sets click to opposite of what it was
  const handeClick = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => {
    setClick(false)
  }


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo'>
            <img id="logo" src={logo2} alt='logo' onClick={closeMobileMenu}></img>
          </Link>
          <div className='menu-icon' onClick={handeClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/about' activeclassname='active' className='nav-links' onClick={closeMobileMenu}>
                ABOUT
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/projects' activeclassname='active' className='nav-links' onClick={closeMobileMenu}>
                PROJECTS
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contact' activeclassname='active' className='nav-links' onClick={closeMobileMenu}>
                CONTACT
              </NavLink>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  )
}

export default NavBar;