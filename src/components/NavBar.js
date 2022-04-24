import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import whiteLogo from '../images/whiteLogo.png'
import './NavBar.css'
// import Home from './Pages/Home'
// import { Button } from './Button'


function NavBar() {
  const [click, setClick] = useState(false)
  // const [button, setButton] = useState(true)


  // sets click to opposite of what it was
  const handeClick = () => {
    setClick(!click)
  }


  const closeMobileMenu = () => {
    setClick(false)
  }

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false)
  //   } else {
  //     setButton(true)
  //   }
  // }

  // window.addEventListener('resize', showButton)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo'>
            <img id="logo" src='../../images/logo2.png' alt='logo' onClick={closeMobileMenu}></img>
          </Link>
          <div className='menu-icon' onClick={handeClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' activeClassName='active' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about' activeClassName='active' className='nav-links' onClick={closeMobileMenu}>
                ABOUT
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/projects' activeClassName='active' className='nav-links' onClick={closeMobileMenu}>
                PROJECTS
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