import React from 'react'
import './HeroSection.css'
import '../App.css'
import { Carousel } from 'react-bootstrap'

function HeroSection() {
  return (
    <>
      <div className='left-panel'>
        <Carousel>
          <Carousel.Item >
            <img
              className='d-block w-100'
              id='slider'
              src='../images/gallatin/lake.jpg'
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              id='slider'
              src='../images/dubois/poster.jpg'
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              id='slider'
              src='../images/hilltop/alt_long1.jpg'
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        {/* <img src='../images/hero.png' alt='home'></img> */}

        {/* <div className='text'>
          <p>Whole System
            Design Solutions
            for <span>Healthy and
              Resilient Living</span></p>
        </div> */}
      </div>
      <div className='about-ne'>
        <p>
          Northeast Projects is one of the lead Passive House Consultants in the Northeast and can help deliver your high performance project within your needs, on time and on budget. Whether it's full Passive House certification, Net-zero, Energy Star or any other form of sustainable building practices, Northeast Projects has the tools to help optimize your project. Advanced energy modeling simulates the performance of your project before breaking ground, eliminating guess work, over-estimation and fine-tuning your project to meet all its intended goals.
        </p>
      </div>
    </>
  )
}

export default HeroSection;
