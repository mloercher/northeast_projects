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
                            <h3 className='services-title'>Passive House Certification</h3>
                            <img src={study} alt='meter' height='80rem'></img>
                            <p className='servicesP'>Northeast Projects certifies all project types through the Passive House Institute US (Phius). In addition to the compliance energy model, this service includes full certification expediting and coordination with the design team through early and late design phases.</p>
                            <br></br>
                            <div className='border'></div>
                            <br></br>
                        </div>
                        <motion.div className="services-list-item" ref={ref2}
                            initial="hidden"
                            whileInView={'visible'}
                            variants={serviceVariants}
                            viewport={{ once: true }}>
                            <h3 className='services-title'>Building Energy Modeling</h3>
                            <img src={graph} alt='graph' height='80rem'></img>
                            <p className='servicesP'>Northeast Projects offers whole-building energy simulation for  net zero design, project optimization, certification compliance and incentive applications. In addition, building envelope analysis is offered including thermal bridge, condensation risk and hygrothermal simulations.</p>
                            <br></br>
                            <div className='border'></div>
                            <br></br>
                        </motion.div>
                        <motion.div className="services-list-item" ref={ref3}
                            initial="hidden"
                            whileInView={'visible'}
                            variants={serviceVariants}
                            viewport={{ once: true }}>
                            <h3 className='services-title'>Enclosure Design and Consulting</h3>
                            {/* <br></br> */}
                            <img src={chat} alt='chat' height='80rem'></img>
                            {/* <br></br> */}
                            <p className='servicesP'>Enclosure design and detail consulting can be provided at any stage in the project. This may range from schematic design of typical building assemblies to troubleshooting details during the construction process.</p>
                            <br></br>
                            <div className='border'></div>
                            <br></br>
                        </motion.div>
                        <motion.div className="services-list-item" ref={ref4}
                            initial="hidden"
                            variants={serviceVariants}
                            whileInView={'visible'}
                            viewport={{ once: true }}>
                            <h3 className='services-title'>Embodied Carbon Analysis</h3>
                            {/* <br></br> */}
                            <img src={study} alt='bubble' height='80rem'></img>
                            {/* <br></br> */}
                            <p className='servicesP'>In addition to operational energy analysis, Northeast Projects offers full life cycle analysis (LCA) of the building or individual components of the building assembly.</p>
                            <br></br>
                            <div className='border'></div>
                            <br></br>
                        </motion.div>
                        <motion.div className="services-list-item" ref={ref4}
                            initial="hidden"
                            variants={serviceVariants}
                            whileInView={'visible'}
                            viewport={{ once: true }}>
                            <h3 className='services-title'>
                                Post-occupancy data monitoring</h3>
                            {/* <br></br> */}
                            <img src={speed} alt='bubble' height='80rem'></img>
                            {/* <br></br> */}
                            <p className='servicesP'>Post-occupancy data monitoring includes the determination of monitoring goals, selectiong of monitor types and locations and the design of a post-occupancy data collection schedule that satisfies the project goals.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services