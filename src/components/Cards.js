import React from 'react'
import './Cards.css'
import { Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// import project_data from "./project_data"




function Cards({ projectMenuItem }) {


  return (
    // <Container fluid>
    <Row className='gy-0 gx-0' id='card-main' lg={2}>
      {
        projectMenuItem.map((project) => (

          <Card
            className="shadow p-0 mt-2" id='card'>
            <Link className="link" key={project.id} style={{ textDecoration: 'none' }} to={project.link}>
              <img src={project.img} className="proj-img  position-relative" alt="project" ></img>
              <div className='img-overlay'>
                <div className='img-title'>
                  {project.title}
                </div>
              </div>
            </Link>
          </Card>


        ))}
    </Row>
    // </Container>
  )

}

export default Cards;