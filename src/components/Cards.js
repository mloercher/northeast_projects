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
          <Link style={{textDecoration: 'none'}} to={project.link}>
            <Card className="rounded-0 mt-5">
              <Card.Title>{project.title}</Card.Title>
              <Card.Text> {project.text}</Card.Text>
              <Card.Img className="proj-img"src={project.img} />
            </Card>
          </Link>
        ))
        }
      </Row>
    </Container>
  )

}

export default Cards;