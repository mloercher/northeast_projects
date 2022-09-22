import sketch from '../../assets/images/sketch.png'
import phLogo from '../../assets/images/ph-logo.png'
import './Services.css'
import React from 'react'
import { motion } from 'framer-motion'

function Services() {
    return (
        <div className='services-container'>
            <div className='services-about'>
                <motion.h1 className="services-title" whileInView={'onscreen'} initial={{ x: -300 }}>Services:</motion.h1>
                <ul>
                    <br></br>
                    <br></br>
                    <br></br>
                    <motion.li className="services-list-item" whileInView={'onscreen'}animate={{ x: 0 }} initial={{ x: 300 }}>
                        <span whileInView={{ x: 0 }} initial={{ x: 100 }}>Building Performance Consulting</span>
                        <br></br>
                        Bring Northeast Projects onto your team and take advantage of dynamic energy model updates integrated into the design process. Consultation includes Drawing review, design walkthrough, mechanical system review, Assembly and detail design as well as energy modeling.
                    </motion.li>
                    <br></br>
                    <br></br>
                    <br></br>
                    <motion.li className="services-list-item" whileInView={'onscreen'}animate={{ x: 0 }} initial={{ x: -300 }}>
                        <span>Whole Building Energy Modeling</span>
                        <br></br>
                        The first time a detail is tested should not be in the field. With the use of energy modeling software that addresses both the whole building as well as it’s individual components we can accurately predict a completed project’s success. The best approach to delivering a high-performance project on time and on budget is through an intelligent design and planning process.
                    </motion.li>
                    <br></br>
                    <br></br>
                    <br></br>
                    <motion.li className="services-list-item" whileInView={'onscreen'}animate={{ x: 0 }} initial={{ x: 300 }}>
                        <span>PH Feasibility Study</span>
                        <br></br>
                        Dedicated to Passive House, but not sure if your design will meet the standards? Before you fully commit to certification, find out if you’ll make the cut. The feasibility report includes review of the design drawings and a design development energy model that will allow testing of multiple wall assemblies, windows and HVAC systems. Even if Passive House certification is not pursued at the end, this is a valuable service to predict and optimize the performance of your project.
                    </motion.li>
                    <br></br>
                    <br></br>
                    <br></br>
                    <motion.li className="services-list-item" whileInView={{animate:'onscreen'}}animate={{ x: 0 }} initial={{ x: 300 }}>
                        <span>Passive House Design and Certification</span>
                        <br></br>
                        Passive House certification involves many parties and processes. Working with Architects and other Building professionals, develop all required design documentation to submit to the Passive House Institute U.S. Coordinate with certification body, design team and PHIUS+ 2018 rater through design, QA/QC and final certification. Please reach out to talk more about your project and request a proposal.
                    </motion.li>
                    <br></br>
                    <br></br>
                    <br></br>
                </ul>


            </div>
            {/* <div className='service-imgs'>
                <motion.img animate={{ x: 0 }} initial={{ x: 100 }} src={sketch} id='services-next' alt='passive house'></motion.img>
                <motion.img animate={{ x: 0 }} initial={{ x: 100 }} src={phLogo} id='passive-logo' alt='ph-logo'></motion.img>
            </div> */}

        </div>
    )
}

export default Services