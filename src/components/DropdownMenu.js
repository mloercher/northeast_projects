// DropdownMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css'

function DropdownMenu({ isOpen, onMouseEnter, onMouseLeave }) {
  return (
    <div className={`dropdown-menu ${isOpen ? 'active' : ''}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link to='/projects/single-family' className='dropdown-item' onClick={onMouseLeave}>
        Single-Family
      </Link>
      <Link to='/projects/retrofit' className='dropdown-item' onClick={onMouseLeave}>
        Retrofit
      </Link>
      <Link to='/projects/commercial' className='dropdown-item' onClick={onMouseLeave}>
        Commercial
      </Link>
      <Link to='/projects/mult-family' className='dropdown-item' onClick={onMouseLeave}>
        Multi-Family
      </Link>
    </div>
  );
}

export default DropdownMenu;
