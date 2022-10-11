import React from 'react'
import { PopupButton } from 'react-calendly'
import './Contact.css'
import { FaPhoneSquareAlt, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

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
                </div>
            </div>
            <div className='contact-container'>
                <div className='contact-about'>
                    <ul>
                        <br></br>
                        <br></br>
                        <br></br>
                        <li className="services-list-item"
                            initial="hidden"
                            whileInView={'visible'}
                            viewport={{ once: true }}>
                            <div className='border'></div>
                            <br></br>
                            <h3 className='services-title'>CONTACT</h3>
                            <br></br>
                            <FaPhoneSquareAlt size={50} />
                            <p className='contact-p'>518-227-0732</p>
                            <FaEnvelope size={50} />
                            <p className='contact-p'>john@ne-projects.com</p>
                            <br></br>
                            <div className='border'></div>
                        </li>
                        <br></br>
                        <br></br>
                        <br></br>
                        <motion.li className="services-list-item"
                            initial="hidden"
                            whileInView={'visible'}
                            viewport={{ once: true }}>
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
                            </div>
                        </motion.li>
                    </ul>
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