import sketch from '../../assets/images/sketch.png'
import phLogo from '../../assets/images/ph-logo.png'
import './Services.css'
import { React, useEffect } from 'react'
import { motion, useAnimation, useRef } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import speed from '../../assets/images/icons/speedGif.gif'
import graph from '../../assets/images/icons/graph.gif'
import study from '../../assets/images/icons/study.gif'
import chat from '../../assets/images/icons/chat.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons'
// import hero from '../../assets/images/heroCROP.png'




function Services() {

    // Variants are objects that you use to define how you want the animation to look and reference the animation by name.
    const serviceVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: .5 } },
        hidden: { opacity: 0, scale: .75 }
    }

    // const controls = useAnimation();
    // const [ref, inView] = useInView();

    const useAnimateOnInView = () => {
        const controls = useAnimation();
        const { ref, inView } = useInView();

        useEffect(() => {
            if (inView) {
                controls.start("visible");
            }
            if (!inView) {
                controls.start("hidden");
            }
        }, [controls, inView]);


        return { ref };
    }

    const { ref: ref1 } = useAnimateOnInView()
    const { ref: ref2 } = useAnimateOnInView()
    const { ref: ref3 } = useAnimateOnInView()
    const { ref: ref4 } = useAnimateOnInView()


    return (
        <div className='services-outside-container'>
            <div className='services-intro'>
                <div className='services-text'>
                    <motion.h1
                        animate={{ y: 0 }}
                        initial={{ y: -20 }}
                        transition={{ type: "spring", stiffness: 100 }} id='services-heading'>
                        SERVICES</motion.h1>
                    <br></br>
                    <motion.p animate={{ y: 0 }} initial={{ y: 20 }}
                        transition={{ stiffness: 100 }} id='ne-mission'>Northeast Projects supports designers, builders and homeowners to complete their high performance projects. Before investing in training or losing valuable time and money in mistakes, take advantage of these valuable design support services.</motion.p>
                </div>
            </div>
            <div className='services-container'>
                <div className='services-about'>
                    {/* <motion.h1 className="services-title">Services:</motion.h1> */}
                    <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="services-list-item" ref={ref1}
                            initial="hidden"
                            whileInView={'visible'}
                            variants={serviceVariants}
                            viewport={{ once: true }}>
                            <div className='border'></div>
                            <br></br>
                            <h3 className='services-title'>Building Performance Consulting</h3>
                            <img src={speed} alt='meter' height='80rem'></img>
                            <p className='servicesP'>Bring Northeast Projects onto your team and take advantage of dynamic energy model updates integrated into the design process. Consultation includes Drawing review, design walkthrough, mechanical system review, Assembly and detail design as well as energy modeling.</p>
                            <br></br>
                            <br></br>
                            <div className='border'></div>
                            <br></br>
                        </div>
                        <motion.div className="services-list-item" ref={ref2}
                            initial="hidden"
                            whileInView={'visible'}
                            variants={serviceVariants}
                            viewport={{ once: true }}>
                            <h3 className='services-title'>Whole Building Energy Modeling</h3>
                            <img src={graph} alt='graph' height='80rem'></img>
                            <p className='servicesP'>The first time a detail is tested should not be in the field. With the use of energy modeling software that addresses both the whole building as well as it’s individual components we can accurately predict a completed project’s success. The best approach to delivering a high-performance project on time and on budget is through an intelligent design and planning process.</p>
                            <br></br>
                            <br></br>
                            <div className='border'></div>
                            <br></br>
                        </motion.div>
                        <motion.div className="services-list-item" ref={ref3}
                            initial="hidden"
                            whileInView={'visible'}
                            variants={serviceVariants}
                            viewport={{ once: true }}>
                            <h3 className='services-title'>PH Feasibility Study</h3>
                            <br></br>
                            <img src={study} alt='clipboard' height='80rem'></img>
                            <br></br>
                            <p className='servicesP'>Dedicated to Passive House, but not sure if your design will meet the standards? Before you fully commit to certification, find out if you’ll make the cut. The feasibility report includes review of the design drawings and a design development energy model that will allow testing of multiple wall assemblies, windows and HVAC systems. Even if Passive House certification is not pursued at the end, this is a valuable service to predict and optimize the performance of your project.</p>
                            <br></br>
                            <br></br>
                            <div className='border'></div>
                        </motion.div>
                        <motion.div className="services-list-item" ref={ref4}
                            initial="hidden"
                            variants={serviceVariants}
                            whileInView={'visible'}
                            viewport={{ once: true }}>
                            <h3 className='services-title'>Passive House Design and Certification</h3>
                            <br></br>
                            <img src={chat} alt='bubble' height='80rem'></img>
                            <br></br>
                            <p className='servicesP'>Passive House certification involves many parties and processes. Working with Architects and other Building professionals, develop all required design documentation to submit to the Passive House Institute U.S. Coordinate with certification body, design team and PHIUS+ 2018 rater through design, QA/QC and final certification. Please reach out to talk more about your project and request a proposal.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services