import React from 'react'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
  return (
    <div>
      <div className='left-panel'>
        <img src='../images/hero.png' alt='home'></img>
        <div className='text'>
          <p>Whole System
            Design Solutions
            for <span>Healthy and
            Resilient Living</span></p>
        </div>
      </div>
      <div className='about-ne'>
        <p>
          Northeast Projects is one of the lead Passive House Consultants in the Northeast and can help deliver your high performance project within your needs, on time and on budget. Whether it's full Passive House certification, Net-zero, Energy Star or any other form of sustainable building practices, Northeast Projects has the tools to help optimize your project. Advanced energy modeling simulates the performance of your project before breaking ground, eliminating guess work, over-estimation and fine-tuning your project to meet all its intended goals.
        </p>
      </div>
    </div>
  )
}

export default HeroSection;
