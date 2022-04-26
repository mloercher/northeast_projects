import React from 'react'
import './Footer.css'
import { FaInstagram, FaFacebook, FaPhoneSquareAlt, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <footer className='footer-container'>
        <div className='contact-content'>
          <div className='phone'>
            <FaPhoneSquareAlt size={15} />
            <p>518-555-5555</p>
          </div>
          <div className='email'>
            <FaEnvelope size={15} />
            <p>john@ne-projects.com</p>
          </div>
          <div className='follow'>
            <p>FOLLOW:</p>
            <div className='icons'>
            <FaInstagram size={20}></FaInstagram>
            <FaFacebook size={20}></FaFacebook>
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


{/* <div className='footer-content'>
<p>CONTACT:</p>
<div className='contact'>
  <FaPhoneSquareAlt size={20} />
  <p>518-555-5555</p>
  <FaEnvelope size={20} />
  <p>john@ne-projects.com</p>
</div>
<p>FOLLOW US:</p>
<div className='icons'>
  <FaInstagram size={15}></FaInstagram>
  <FaFacebook size={15}></FaFacebook>
</div>
</div> */}


{/* <div className='contact'>
<FaPhoneSquareAlt>
518-555-5555
</FaPhoneSquareAlt>
<FaEnvelope>
jc.loercher@mail.com
</FaEnvelope>
</div> */}