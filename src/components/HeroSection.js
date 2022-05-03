import React from 'react'
import './HeroSection.css'
import '../App.css'
import { Carousel } from 'react-bootstrap'

function HeroSection() {
  return (
    <>
      <div className='left-panel'>
        <Carousel fade indicators={false} autoPlay={true} interval={3000} controls={false}>
          <Carousel.Item >
            <img
              className='d-block w-100 carousel-fade'
              id='slider'
              src='../images/gallatin/lake.jpg'
              alt="First slide"

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-fade'
              id='slider'
              src='../images/dubois/poster.jpg'
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-fade'
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
      <div className='below-carousel'>
        <div className='about-ne'>
          <p>
            Northeast Projects is one of the lead Passive House Consultants in the Northeast and can help deliver your high performance project within your needs, on time and on budget.Whether it's full Passive House certification, Net-zero, Energy Star or any other form of sustainable building practices, Northeast Projects has the tools to help optimize your project.</p>
        </div>
      </div>
    </>
  )
}

export default HeroSection;
