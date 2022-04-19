import React from 'react'
// import CardItem from './CardItem'
import './Cards.css'
import { Card, Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import project_data from './Pages/project_data'



function Cards() {
  return (
    <Container>
      <Row lg={3}>
      {project_data.map((project) => (
          <Link to={project.link}>
            <Card >
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className='text'> {project.text}
                </Card.Text>
                <Card.Img variant="top" src={project.img} />
              </Card.Body>
            </Card>
          </Link>
      ))
      }
      </Row>
    </Container>
  )
  
}

export default Cards;