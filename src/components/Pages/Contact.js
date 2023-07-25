import React from 'react'
import { PopupButton } from 'react-calendly'
import './Contact.css'
import { FaPhoneSquareAlt, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import ContactForm from '../ContactForm'
import JL from '../../assets/images/JL.png'

// nav black to match top of gradient 
// remove passive house from nav 
// contact chnage to about -- add link to CV fo download pdf, link to statement to download pdf
// add LinkedIn


// contact: email and phone -- p: 518-227-0732, email: john@ne-projects.com
// about NE proj 
// TEAM -- include about me 


function Contact() {
    return (
        <div className='contact-outside-container'>
            <div className='contact-intro' >
                <div className='contact-text'>
                    <motion.h1
                        animate={{ y: 0 }}
                        initial={{ y: -20 }}
                        transition={{ type: "spring", stiffness: 100 }} id='contact-heading'>
                        CONTACT</motion.h1>
                    <br></br>
                    <motion.h2 animate={{ y: 0 }} initial={{ y: 20 }}
                        transition={{ stiffness: 100 }} id='top-contact'>P: 518-227-0732 </motion.h2>
                    <motion.h2 animate={{ y: 0 }} initial={{ y: 20 }}
                        transition={{ stiffness: 100 }} id='top-contact'>E: john@ne-projects.com </motion.h2>
                    <br></br>
                    <br></br>
                    <div className='border'></div>
                    <br></br>
                    <br></br>
                    <motion.p animate={{ y: 0 }} initial={{ y: 20 }}
                        transition={{ stiffness: 100 }} id='ne-mission'>Northeast Projects supports designers, builders and homeowners to complete their high performance projects. Before investing in training or losing valuable time and money in mistakes, take advantage of these valuable design support services.</motion.p>

                </div>
            </div>

            <div className='contact-container'>
                <div style={{ display: 'flex', justifyContent:'center'  }}>
                    <img id="portrait" src={JL} alt='portrait' height='80rem'></img>
                    <p className='firmP'>John Loercher is a Professor of Architecture, CPHC instructor for the Passive House Institute U.S. and owner of Northeast Projects LLC. He is a Certified Passive House Consultant and holds a masters of architecture from Parsons the New School for Design. His firm, Northeast Projects, specializes in Passive House design, high performance building envelopes and advanced energy modeling. It serves a diverse range of projects from single-family and mti-family residential, commercial, new construction and retrofits.</p>
                    {/* <div className='border'></div> */}

                </div>
                <div style={{ display: 'flex', justifyContent:'center' }}>
                    <img id="portrait" src={JL} alt='portrait' height='80rem'></img>
                    <p className='firmP'>John Loercher is a Professor of Architecture, CPHC instructor for the Passive House Institute U.S. and owner of Northeast Projects LLC. He is a Certified Passive House Consultant and holds a masters of architecture from Parsons the New School for Design. His firm, Northeast Projects, specializes in Passive House design, high performance building envelopes and advanced energy modeling. It serves a diverse range of projects from single-family and mti-family residential, commercial, new construction and retrofits.</p>
                    {/* <div className='border'></div> */}
                </div>
            </div>
        </div>
    )
}

export default Contact;



{/* <div className='phone'>
                        <FaPhoneSquareAlt size={50} />
                        <p className='contact-p'>518-227-0732</p>
                    </div>
                    <div className='email'>
                        <FaEnvelope size={50} />
                        <p className='contact-p'>john@ne-projects.com</p>
                    </div>
                </div>
                <div className='appt'>
                    <h1 className='c-title'>SCHEDULE A MEETING:</h1>
                    <p className='services'>Services:

                        <ul>
                            <li>

                                Building Performance Consulting
                            </li>
                            <li>

                                Whole Building Energy Modeling
                            </li>
                            <li>

                                Passive House Feasibility Study
                            </li>
                            <li>

                                Passive House Design and Certification
                            </li>
                        </ul>
                    </p>
                    <PopupButton
                        url="https://calendly.com/jmccasusi/"
                        variant="outline-light" classname='btn'
                        rootElement={document.getElementById("root")}
                        text="Click here to schedule!"
                        textColor="#000000"
                        color="#FFFFFF"
                    />
                </div> */}






{/* <h1 className='c-title'>SCHEDULE A MEETING:</h1>
                                <p className='services'>Services:

                                    <ul>
                                        <li>

                                            Building Performance Consulting
                                        </li>
                                        <li>

                                            Whole Building Energy Modeling
                                        </li>
                                        <li>

                                            Passive House Feasibility Study
                                        </li>
                                        <li>

                                            Passive House Design and Certification
                                        </li>
                                    </ul>
                                </p>
                                <PopupButton
                                    url="https://calendly.com/jmccasusi/"
                                    variant="outline-light" classname='btn'
                                    rootElement={document.getElementById("root")}
                                    text="Click here to schedule!"
                                    textColor="#000000"
                                    color="#FFFFFF"
                                /> */}