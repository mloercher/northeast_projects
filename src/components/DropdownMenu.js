// DropdownMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css'

function DropdownMenu({ isOpen, onMouseEnter, onMouseLeave }) {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className={`dropdown-menu ${isOpen ? 'active' : ''}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link to='/projects/single-family' className='dropdown-item' onClick={closeMobileMenu}>
        Single-Family
      </Link>
      <Link to='/projects/retrofit' className='dropdown-item' onClick={closeMobileMenu}>
        Retrofit
      </Link>
      <Link to='/projects/commercial' className='dropdown-item' onClick={closeMobileMenu}>
        Commercial
      </Link>
      <Link to='/projects/multi-family' className='dropdown-item' onClick={closeMobileMenu}>
        Multi-Family
      </Link>
    </div>
  );
}

export default DropdownMenu;
