import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '../images/whiteLogo.png'
import './NavBar.css'
import { Button } from './Button'


function NavBar() {
  const [click, setClick] = useState(false)
  // const [button, setButton] = useState(true)


  const handeClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

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
            <img id="logo" src={whiteLogo} alt='logo'></img>
          </Link>
          <div className='menu-icon' onClick={handeClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  )
}

export default NavBar;