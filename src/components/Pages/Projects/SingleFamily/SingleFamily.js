import React from 'react'
import gallatinLake from '../../../../assets/images/gallatin/newlake.png'
import duboisPoster from '../../../../assets/images/dubois/poster.jpg'
import { Carousel } from 'react-bootstrap'

import '../Commercial/Commercial.css'

function Commercial() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div className='top-cont'>
        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
          <h1 id='cat-title'>Commercial Projects</h1>
        </div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={gallatinLake}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={duboisPoster}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', width: '70%', paddingTop: '10px' }}>
          <h2 className='feat-proj-title'>Featured Project: Accord Passive House</h2>
          <p className='feat-proj-description'>
            'Passive House' is a building methodology developed to aggressively meet the climate crisis carbon reduction imperative while making a comfortable, healthy and affordable built environment.
            It calls for drastic cuts in the amount of energy our buildings consume through passive methods (insulation, solar heat gain, etc) - hence the name 'Passive House'.

          </p>
        </div>
      </div>
      <div className='bottom-cont'>
        <div className='info-container'>
          <div className='year'>
            <h3>Year</h3>
            <ul>
              <li>
                2018
              </li>
              <li>
                2019
              </li>
            </ul>
          </div>
          <div className='name'>
            <h3>Project Name</h3>
            <ul>
              <li>
                Accord Passive House
              </li>
              <li>
                Newburgh Passive House
              </li>
            </ul>
          </div>
          <div className='location'>
            <h3>Location</h3>
            <ul>
              <li>
                Accord, NY
              </li>
              <li>
                Newburgh, NY
              </li>
            </ul>

          </div>
          <div className='certification'>
            <h3>Certification</h3>
            <ul>
              <li>
                PHIUS
              </li>
              <li>
                PHIUS
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Commercial