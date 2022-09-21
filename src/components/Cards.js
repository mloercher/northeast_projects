import React from 'react'
import './Cards.css'
import { Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import project_data from "./project_data"




function Cards({ projectMenuItem }) {


  return (
    <Container fluid>
      <Row className='gy-4' lg={3}>
        {
          projectMenuItem.map((project) => (
            <Link key={project.id} style={{ textDecoration: 'none' }} to={project.link}>
              <Card className="shadow p-3 rounded-0 mt-4" id='card'>
                <img src={project.img} className="proj-img rounded-0 position-relative" alt="project" ></img>
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