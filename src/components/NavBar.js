import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo2 from '../assets/images/logo2.png';
import DropdownMenu from './DropdownMenu';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const onMouseEnter = () => {
    setDropdownOpen(true);
  };

  const onMouseLeave = () => {
    setDropdownOpen(false);
  };




  return (
    <div className='navigation'>
      <Link to='/' className='navbar-logo'>
        <img id="logo" src={logo2} alt='logo' onClick={closeMobileMenu}></img>
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {/* <div style={{display:'flex', flexDirection:'column', height:'300px', alignItems:'center', justifyContent:'space-evenly'}}> */}
        <div className='nav-item-wrapper'>
          <li className='navigationItem'>
            <Link to='/services' style={{ textDecoration: 'none' }}>
              <div className='aboutProj' textDecoration="none" onClick={closeMobileMenu}>SERVICES</div>
            </Link>
          </li>
          <li className='navigationItem'>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <div className='aboutProj' textDecoration="none" onClick={closeMobileMenu}>ABOUT</div>
            </Link>
          </li>
          <li className={`navigationItem dropdown ${dropdownOpen ? 'active' : ''}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handleDropdown}>
            <div style={{ display: 'flex' }}>
              <div className='aboutProj'>PROJECTS</div>
              <i className={`fas fa-caret-down ${dropdownOpen ? 'active' : ''}`} />
              {dropdownOpen && <DropdownMenu />}
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
