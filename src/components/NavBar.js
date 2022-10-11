import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import AboutDropdown from './AboutDropdown';
import ProjectsDropdown from './ProjectsDropdown';
import logo2 from '../assets/images/logo2.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [aDropdown, setADropdown] = useState(false);

  // const [Pdropdown, setPDropdown] = useState(false);

  const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);


  // when mouse enters image (hovers), set dropdown to true if window size is larger than 960px
  const AonMouseEnter = () => {
    if (window.innerWidth < 960) {
      setADropdown(false);
    } else {
      setADropdown(true);
    }
  };
  // when mouse leaves image (no longer hovers), set dropdown to false --again disregard dropdown for mobile(see above)
  const AonMouseLeave = () => {
    if (window.innerWidth < 960) {
      setADropdown(false);
    } else {
      setADropdown(false);
    }
  };

  return (
    <div className='navbar'>
      <Link to='/' className='navbar-logo'>
        <img id="logo" src={logo2} alt='logo'></img>
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li
          className='nav-item'
          onMouseEnter={AonMouseEnter}
          onMouseLeave={AonMouseLeave}
        >
          <div className='aboutProj'>ABOUT</div><i className='fas fa-caret-down'/>
          {aDropdown && < AboutDropdown />}
        </li>
        
        <li
          className='nav-item'
          // onMouseEnter={PonMouseEnter}
          // onMouseLeave={PonMouseLeave}
        >
          <Link to='/projects' style={{ textDecoration: 'none' }}>
          <div className='aboutProj' textDecoration="none">PROJECTS</div>
          </Link>
        </li>
      </ul>
    </div>

  )
}

export default Navbar