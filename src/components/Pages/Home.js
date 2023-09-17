import React from 'react'
import './Home.css'
// import JL from '../../assets/images/JL.png'
import { motion } from 'framer-motion'
import firmLogo from '../../assets/images/firmLogo.png'



function Firm() {
  return (
    <div className='firm-outside-container'>
      <div className='firm-intro'>
        <motion.img
          animate={{ y: 0 }}
          initial={{ y: -20 }}
          transition={{ type: "spring", stiffness: 100, duration: 300 }} id='firm-heading' src={firmLogo}>
        </motion.img>
        <motion.p
          animate={{ y: 0 }}
          initial={{ y: 20 }}
          transition={{ type: "spring", stiffness: 100, duration: 300 }}
          style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>Whole system design for better living
        </motion.p>
      </div>
      <div className='firm-container'>
        <div className='firm-about'>
          {/* <motion.h1 className="services-title">Services:</motion.h1> */}
          <div className='list-outside'>
            <br></br>
            <div className="firm-list-item"
              initial="hidden"
              whileinview={'visible'}
              viewport={{ once: true }}>
              <div className='border'></div>
              {/* <img src={speed} alt='meter' height='80rem'></img> */}
              <br></br>
              <p className='about_ne_home'>Northeast Projects is a building energy and enclosure consulting firm and one of the lead Passive House consultants in the US. The firm, lead by principle consultant and educator John Loercher, offers specialization in passive house design and certification, high performance construction details and advanced energy modeling that assist corporate, government and higher institutions in achieving their building energy goals.
                <br></br>
                <br></br>
                Northeast Projects engages a wide range of work including single and multi-family residential, commercial, new construction and retrofits projects.  It  applies expertise and agility to provide a custom approach to your project.</p>
              <br></br>
              <div className='border'></div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <motion.div className="services-list-item"
              initial="hidden"
              whileinview={'visible'}

              viewport={{ once: true }}>
              {/* <h3 className='firm-title'>John Loercher</h3>
              <br></br> */}
              {/* <img id="portrait" src={JL} alt='portrait' height='80rem'></img> */}
              {/* <br></br> */}
              {/* <p className='firmP'>John Loercher is a Professor of Architecture, CPHC instructor for the Passive House Institute U.S. and owner of Northeast Projects LLC. He is a Certified Passive House Consultant and holds a masters of architecture from Parsons the New School for Design. His firm, Northeast Projects, specializes in Passive House design, high performance building envelopes and advanced energy modeling. It serves a diverse range of projects from single-family and mti-family residential, commercial, new construction and retrofits.</p> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Firm