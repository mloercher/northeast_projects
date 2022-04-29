import React from 'react'
import { PopupButton } from 'react-calendly'
import './Contact.css'
import { FaPhoneSquareAlt, FaEnvelope } from 'react-icons/fa'

function Contact() {
    return (
        <div className='contact-container'>
            <div className='top-container' >
                <img src='../images/contact-bg.png' alt='contact' id='bg'></img>
            </div>
            <div className='bottom-container'>
                <div className='contact'>
                {/* <h1>CONTACT</h1> */}
                <div className='phone'>
                    <FaPhoneSquareAlt size={50} />
                    <p>518-555-5555</p>
                </div>
                <div className='email'>
                    <FaEnvelope size={50} />
                    <p>john@ne-projects.com</p>
                </div>
                </div>

                <PopupButton
                    url="https://calendly.com/jmccasusi/"
                    /*
                     * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                     * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                     */
                    rootElement={document.getElementById("root")}
                    text="Click here to schedule!"
                    textColor="#000000"
                    color="#FFFFFF"
                />
            </div>
        </div>
    )
}

export default Contact;