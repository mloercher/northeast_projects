import React from 'react'
import './Footer.css'
import { FaInstagram, FaFacebook, FaPhoneSquareAlt, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <footer className='footer-container'>
        <div className='contact-content'>
          {/* <div className='phone'>
            <FaPhoneSquareAlt size={15} />
            <p>518-555-5555</p>
          </div>
          <div className='email'>
            <FaEnvelope size={15} />
            <p>john@ne-projects.com</p>
          </div> */}
          <div className='follow'>
            <p>FOLLOW:</p>
            <div className='icons'>
            <a href="https://www.instagram.com/ne_projects" rel="noreferrer" target="_blank" style={{textDecoration: 'none'}}><FaInstagram size={30} id="insta" /></a>
            <a href="https://www.facebook.com/ne_projects" rel="noreferrer" target="_blank" style={{textDecoration: 'none'}}> <FaFacebook size={30} id="facebook"/></a>
            </div>
          </div>
          <div className='copyright'>
          &#169;{new Date().getFullYear()} NorthEast Projects, LLC
          </div>
        </div>
      

      </footer>
    </>
  )
}

export default Footer;




