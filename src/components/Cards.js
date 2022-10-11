import React from 'react'
import './Cards.css'
import { Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion} from 'framer-motion'
// import project_data from "./project_data"




function Cards({ projectMenuItem }) {


  return (
    <Container fluid>
      <Row className='gy-6' id='card-main'lg={2}>
        {
          projectMenuItem.map((project) => (
            <Link key={project.id} style={{ textDecoration: 'none' }} to={project.link}>
              <Card 
              className="shadow-lg p-3 rounded-2 mt-4" id='card'>
                <img src={project.img} className="proj-img rounded-2 position-relative" alt="project" ></img>
                <div className='img-overlay'>
                  <div className='img-title'>
                    {project.title}
                  </div>
                </div>
              </Card>
            </Link>
        
          ))}
      </Row>
    </Container>
  )

}

export default Cards;