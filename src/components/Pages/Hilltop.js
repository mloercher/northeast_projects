import React from 'react'
import './Accord.css';
import { Carousel } from 'react-bootstrap'
import gallatinLake from '../../assets/images/gallatin/newlake.png'
import duboisPoster from '../../assets/images/dubois/newren.png'
import hilltopAlt from '../../assets/images/hilltop/alt_long1.jpg'



function Hilltop() {
    // return accord_slides.map((slide) => (
    return (

        <div className='accord-main-cont'>
            <div className='top-cont'>
                <Carousel id='carousel-hero' fade>
                    <Carousel.Item>
                        <img
                            className="carousel-img"
                            src={gallatinLake}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-img"
                            src={duboisPoster}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-img"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id='proj-info'>
                <div className='a-column1'>
                    <h1 id='proj-title'>Accord Passive House</h1>
                    <h3 id='proj-location'>Accord, NY</h3>
                    <p>
                        'Passive House' is a building methodology developed to aggressively meet the climate crisis carbon reduction imperative while making a comfortable, healthy and affordable built environment.
                        It calls for drastic cuts in the amount of energy our buildings consume through passive methods (insulation, solar heat gain, etc) - hence the name 'Passive House'.

                    </p>
                </div>
                <div className='a-column2'>
                    <h3>Type</h3>
                    <p>Multi-Family</p>
                    <p>
                        'Passive House' is a building methodology developed to aggressively meet the climate crisis carbon reduction imperative while making a comfortable, healthy and affordable built environment.
                        It calls for drastic cuts in the amount of energy our buildings consume through passive methods (insulation, solar heat gain, etc) - hence the name 'Passive House'.
                    </p>
                    <h3>Additional Info</h3>
                    <p>Publication: <a href='https://www.w3schools.com/'>www.forbes.com/passivehouse</a></p>
                </div>
            </div>
        </div>
    )

}

export default Hilltop;