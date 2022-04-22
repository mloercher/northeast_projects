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
          <Link style={{ textDecoration: 'none' }} to={project.link}>
            <Card className="shadow p-3 rounded-0 mt-4" id='card'>
              <img src={project.img} className="proj-img rounded-0 position-relative" alt="project" ></img>
              {/* <h5>{project.title}</h5> */}
              <div className='img-overlay'>
                <div className='img-title'>
                  {project.title}
                  {/* <div className='img-description'>
                    <p>{project.text}</p>
                  </div> */}
                </div>
              </div>
              {/* <Card.ImgOverlay className='proj-title'>
                <h5>{project.title}</h5>
                <Card.Text> {project.text}</Card.Text>
              </Card.ImgOverlay> */}
            </Card>
          </Link>
        ))
        }
      </Row>
    </Container>
  )

}

export default Cards;