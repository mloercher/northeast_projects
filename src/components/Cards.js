import React from 'react'
// import CardItem from './CardItem'
import './Cards.css'
import { Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import project_data from './project_data'



function Cards(props) {
  return project_data.map((project) => (
    <div>
      <Row>
        <Link to={project.link}>
          <Card>
            <Card.Body className='card-body'>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text className='description'> {project.text}
              </Card.Text>
              <Card.Img variant="top" src={project.img}/>
            </Card.Body>
          </Card>
        </Link>
      </Row>
    </div>
  ));
  }

  export default Cards;