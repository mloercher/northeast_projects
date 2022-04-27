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
            <FaInstagram size={30} id="insta"></FaInstagram>
            <FaFacebook size={30} id="facebook"></FaFacebook>
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




