import React from 'react'
import { Carousel } from 'react-bootstrap';
import './Accord.css';
import accord_slides from './AccordSlides';

function Accord() {
    return accord_slides.map((slide) => (
        <div>
        <h1>Accord Passive House</h1>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide.img1}
                    alt="First slide"
                />
                <Carousel.Caption className='cap'>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide.img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide.img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    ))
}

export default Accord;