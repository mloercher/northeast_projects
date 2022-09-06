import React from 'react'
import './HeroSection.css'
import '../App.css'
import { Carousel } from 'react-bootstrap'
import gallatinLake from '../assets/images/gallatin/newlake.png'
import duboisPoster from '../assets/images/dubois/newren.png'
import hilltopAlt from '../assets/images/hilltop/newlong.png'

function HeroSection() {
  return (
    <>
      {/* <div className='left-panel'>
        <Carousel fade indicators={false} autoPlay={true} interval={3000} controls={false}>
          <Carousel.Item >
            <img
              className='d-block w-100 carousel-fade'
              id='slider'
              src={gallatinLake}
              alt="First slide"

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-fade'
              id='slider'
              src={duboisPoster}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-fade'
              id='slider'
              src={hilltopAlt}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel> */}
    </>
  )
}

export default HeroSection;
