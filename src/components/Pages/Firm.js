import React from 'react'
import './Firm.css'
import JL from '../../assets/images/JL.png'
import { motion } from 'framer-motion'
import firmLogo from '../../assets/images/firmLogo.png'



function Firm() {
  return (
    <div className='firm-outside-container'>
      <div className='firm-intro'>
        <div className='firm-text'>
          <motion.img
            animate={{ y: 0 }}
            initial={{ y: -20 }}
            transition={{ type: "spring", stiffness: 100 }} id='firm-heading' src={firmLogo}>
          </motion.img>
          <br></br>
        </div>
      </div>
      <div className='firm-container'>
        <div className='firm-about'>
          {/* <motion.h1 className="services-title">Services:</motion.h1> */}
          <ul>
            <br></br>
            <br></br>
            <br></br>
            <li className="firm-list-item"
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: true }}>
              <div className='border'></div>
              {/* <img src={speed} alt='meter' height='80rem'></img> */}
              <br></br>
              <br></br>
              <p className='firmP'>Northeast Projects is one of the lead Passive House Consultants in the Northeast and can help deliver your high performance project within your needs, on time and on budget. Whether it's full Passive House certification, Net-zero, Energy Star or any other form of sustainable building practices, Northeast Projects has the tools to help optimize your project. Advanced energy modeling simulates the performance of your project before breaking ground, eliminating guess work, over-estimation and fine-tuning your project to meet all its intended goals.</p>
              <br></br>
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
              <h3 className='firm-title'>John Loercher</h3>
              <br></br>
              <img id="portrait" src={JL} alt='portrait' height='80rem'></img>
              <br></br>
              <p className='firmP'>John is a Professor of Architecture, CPHC instructor for the Passive House Institute U.S. and owner of Northeast Projects LLC. He is a Certified Passive House Consultant and holds a masters of architecture from Parsons the New School for Design. His firm, Northeast Projects, specializes in Passive House design, high performance building envelopes and advanced energy modeling. It serves a diverse range of projects from single-family and multi-family residential, commercial, new construction and retrofits.</p>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Firm