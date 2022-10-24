import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import logo2 from '../assets/images/logo2.png'
import DropdownMenu from './DropdownMenu'

function Navbar() {
  const [click, setClick] = useState(false);
  // const [Dropdown, setDropdown] = useState(false);

  // const [Pdropdown, setPDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  // when mouse enters image (hovers), set dropdown to true if window size is larger than 960px
  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };
  // when mouse leaves image (no longer hovers), set dropdown to false --again disregard dropdown for mobile(see above)
  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };



  return (
    <div className='navbar'>
      <Link to='/' className='navbar-logo'>
        <img id="logo" src={logo2} alt='logo' onClick={closeMobileMenu}></img>
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li
          className='nav-item'
        >
          <Link to='/services' style={{ textDecoration: 'none' }}>
            <div className='aboutProj' textDecoration="none" onClick={closeMobileMenu}>SERVICES</div>
          </Link>
        </li>
        <li
          className='nav-item'
        >
          <Link to='/passiveHouse' style={{ textDecoration: 'none' }}>
            <div className='aboutProj' textDecoration="none" onClick={closeMobileMenu}>PASSIVE HOUSE</div>
          </Link>
        </li>
        <li
          className='nav-item'
        >
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <div className='aboutProj' textDecoration="none" onClick={closeMobileMenu}>CONTACT</div>
          </Link>
        </li>
        <li
          className='nav-item'
        >
          <Link to='/projects' style={{ textDecoration: 'none' }}>
            <div className='aboutProj' textDecoration="none" onClick={closeMobileMenu}>PROJECTS</div>
          </Link>
        </li>
      </ul>
    </div>

  )
}

export default Navbar




{/* conditions for dropdown menu on DESKTOP */ }
{/* <li
className='nav-item'
onMouseEnter={onMouseEnter}
onMouseLeave={onMouseLeave}
>
<div className='aboutProj'>ABOUT</div><i className='fas fa-caret-down' />
{Dropdown && <DropdownMenu />}
</li> */}
