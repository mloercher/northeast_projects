import React, { useEffect } from 'react';
import './Footer.css';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <footer className='footer-container'>
        <div className='contact-content'>
          <div className='follow'>
            <div className='icons'>
              <a href="https://www.instagram.com/ne_projects" rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
                <FaInstagram size={30} style={{ color: '#FFF' }} id="insta" />
              </a>
              <Link to='/contact' style={{ textDecoration: 'none' }}>
                <FaPhone size={24} style={{ color: '#FFF' }} id="phone" />
              </Link>
              <Link to='/contact' style={{ textDecoration: 'none' }}>
                <FaEnvelope size={28} style={{ color: '#FFF' }} id="email" />
              </Link>
            </div>
          </div>
          <div className='copyright'>
            &#169;{new Date().getFullYear()} Northeast Projects, LLC
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
