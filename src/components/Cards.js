import React from 'react'
// import CardItem from './CardItem'
import './Cards.css'
import { Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import project_data from './Pages/project_data'



function Cards() {
  return (
    <Container>
      {project_data.map((project) => (
        <>
          <Link to={project.link}>
            <Card className=''>
              <Card.Body className='card-body'>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className='description'> {project.text}
                </Card.Text>
                <Card.Img variant="top" src={project.img} />
              </Card.Body>
            </Card>
          </Link>
        </>
      ))
      }
    </Container>
  )
}

export default Cards;