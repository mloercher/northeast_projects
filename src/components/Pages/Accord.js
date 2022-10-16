import React from 'react'
import './Accord.css';
import { Carousel } from 'react-bootstrap'
import gallatinLake from '../../assets/images/gallatin/newlake.png'
import duboisPoster from '../../assets/images/dubois/newren.png'
import hilltopAlt from '../../assets/images/hilltop/alt_long1.jpg'

function Accord() {
    // return accord_slides.map((slide) => (
    return (
        <div className='accord-main-cont'>
            <Carousel fade indicators={true} autoPlay={true} interval={2500} controls={true}>
                <Carousel.Item >
                    <img className="carousel-img d-block carousel-fade"
                        // id='slider'
                        src={gallatinLake}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <img className="carousel-img d-block carousel-fade"
                        // id='slider'
                        src={duboisPoster}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <img className="carousel-img d-block carousel-fade"
                        // id='slider'
                        src={hilltopAlt}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div id='proj-info'>
                <h1 id='proj-title'>Accord Passive House</h1>
                <h3 id='proj-location'>Accord, NY</h3>
            </div>
        </div>
    )

}

export default Accord;

{/* <div className='accord-container'>
<div className='title-img'>
    <img src={accord_proj} alt='accord passive house' id='img_proj'></img>
    <h1 id='proj_name'>Accord Passive House</h1>
    <h5 id='proj_location'>Accord, NY</h5>
</div>
<div className='accord-info'>
    <div className='accord-stats'>
        <div className='category'>
            <p className='title'>Type:</p>
            <p className='stat'>Single-Family</p>
        </div>
        |
        <div className='category'>
            <p className='title'>iCFA</p>
            <p className='stat'>2,755 ft2</p>
        </div>
        |
        <div className='category'>
            <p className='title'>Climate</p>
            <p className='stat'>5a</p>
        </div>
        |
        <div className='category'>
            <p className='title'>Surface/iCFA</p>
            <p className='stat'>2.785</p>
        </div>
        |
        <div className='category'>
            <p className='title'>Heating Demand</p>
            <p className='stat'>5.76 kBTU/ft2.yr</p>
        </div>
        |
        <div className='category'>
            <p className='title'>Cooling Demand</p>
            <p className='stat'>.96 kBTU/ft2.yr</p>
        </div>
        |
        <div className='category'>
            <p className='title'>Heating Load</p>
            <p className='stat'>4.31 BTU/hr.ft2</p>
        </div>
        |
        <div className='category'>
            <p className='title'>Cooling Load</p>
            <p className='stat'>2.19 BTU/hr.ft2</p>
        </div>
        |
        <div className='category'>
            <p className='title'>Source Energy</p>
            <p className='stat'>5,441 kWh/ea.yr</p>
        </div>
    </div>
</div>
</div> */}