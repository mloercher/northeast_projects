import React from 'react'
import { PopupButton } from 'react-calendly'
import './Contact.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import ContactForm from '../ContactForm'
import headshot from '../../assets/images/headshot.png'
import consulting from '../../assets/images/consulting.png'
import statement from '../../assets/images/statement.pdf'

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
                    {/* <motion.p animate={{ y: 0 }} initial={{ y: 20 }} className='border'></motion.p> */}
                    <motion.p animate={{ y: 0 }} initial={{ y: 20 }}
                        transition={{ stiffness: 100 }} id='contact-blurb'>Northeast Projects was founded in 2017 in the Hudson Valley of New York state. Through local connections in the high-performance building industry and a reputation of success, it quickly became the consultant for over 50% of the certified passive buildings in the region. Northeast Projects is a registered Primary Energy Consultant (PEC) for NYSERDA and offers support services from design to post-occupancy data monitoring throughout the Northeast and beyond.
                    </motion.p>
                    <div>
                        <motion.h2 animate={{ y: 0 }} initial={{ y: 20 }}
                            transition={{ stiffness: 100 }} id='top-contact'><FaPhone size={24} style={{ color: '#FFF' }} id="phone" /> 518-227-0732 </motion.h2>
                        <motion.h2 animate={{ y: 0 }} initial={{ y: 20 }}
                            transition={{ stiffness: 100 }} id='top-contact'><FaEnvelope size={24} style={{ color: '#FFF' }} id="email" /> info@northeastprojects.com </motion.h2>
                        <p id='capabilityStatement'>
                            <a  href={statement} download={statement}>Download</a> the Northeast Projects Capability Statement
                        </p>
                    </div>
                </div>
                {/* <div>
                    <p>Click the link below to download the PDF:</p>
                    <a
                        href={statement}
                        download={statement}
                    >
                        Download PDF
                    </a>
                </div> */}
            </div>
            <div className='contact-container'>
                {/* <br></br> */}
                <h2 style={{ color: 'white' }}>About</h2>
                <div className='border'></div>
                <br></br>
                <div className='portrait-div'>
                    <img id="portrait" src={headshot} alt='portrait' style={{ width: '15%', height: 'auto', minWidth: '200px' }}></img>
                    <div className='JL-wrapper'>
                        <h3 style={{ color: 'white', width: 'auto' }}>John Loercher, Owner/Consultant</h3>
                        <p className='firmP'>John Loercher is a Professor of Architecture, CPHC instructor for the Passive House Institute U.S. and owner of Northeast Projects LLC. He is a Certified Passive House Consultant and holds a masters of architecture from Parsons the New School for Design. His firm, Northeast Projects, specializes in Passive House design, high performance building envelopes and advanced energy modeling. It serves a diverse range of projects from single-family and mti-family residential, commercial, new construction and retrofits.</p>
                    </div>

                </div>
                <div className='collab-div'>
                    <img id='collaborator' src={consulting} alt='collaboration with team' style={{ width: '15%', height: 'auto', minWidth: '200px' }}></img>
                    <div className='JL-wrapper'>
                        <h3 style={{ color: 'white', width:'auto' }}>Team of Collaborators</h3>
                        <p className='firmP'>Northeast Projects is an agile consulting firm that calls on various collaborators in the high performance building industry to deliver projects within the client's expectations. It draws on a vast network of Architects, consultants, builders, students and developers to provide whole systems solutions to complex problems.  It offers specialization in passive house design and certification, high performance construction details and advanced energy modeling that assist corporate, government and higher institutions in achieving their building energy goals.</p>
                    </div>
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