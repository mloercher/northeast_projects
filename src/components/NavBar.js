import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'


function NavBar() {
  const [click, setClick] = useState(false)
  const handeClick = () => setClick(!click)
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo'>
            {/* <img src={logo} alt='logo'></img> */}
            Northeast_Projects
          </Link>
          <div className='menu-icon' onClick={handeClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;