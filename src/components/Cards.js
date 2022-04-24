import React from 'react'
// import CardItem from './CardItem'
import './Cards.css'
import { Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import project_data from './Pages/project_data'



function Cards() {
  return (
    <Container fluid>
      <Row className='gy-4' lg={3}>
        {project_data.map((project) => (
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