import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { Card, Button } from 'react-bootstrap'


function Cards() {
  return (
    <div className='card-container'>
      <div className='card'>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/accord_proj.png" />
          <Card.Body>
            <Card.Title>Accord Passive House</Card.Title>
            <Card.Text className='description'>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
            {/* <Button variant="primary">View Project</Button> */}
          </Card.Body>
        </Card>
      </div>
      <div className='card'>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/accord_proj.png" />
          <Card.Body>
            <Card.Title>Accord Passive House</Card.Title>
            <Card.Text>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='card'>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/accord_proj.png" />
          <Card.Body>
            <Card.Title>Accord Passive House</Card.Title>
            <Card.Text>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='card'>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/accord_proj.png" />
          <Card.Body>
            <Card.Title>Accord Passive House</Card.Title>
            <Card.Text>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='card'>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/accord_proj.png" />
          <Card.Body>
            <Card.Title>Accord Passive House</Card.Title>
            <Card.Text>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='card'>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/accord_proj.png" />
          <Card.Body>
            <Card.Title>Accord Passive House</Card.Title>
            <Card.Text>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='card'>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/accord_proj.png" />
          <Card.Body>
            <Card.Title>Accord Passive House</Card.Title>
            <Card.Text>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='card'>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/accord_proj.png" />
          <Card.Body>
            <Card.Title>Accord Passive House</Card.Title>
            <Card.Text>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Cards;


{/* <div className='cards'>
<h1>Projects</h1>
 <div className='cards-container'>
    <div className='cards-wrapper'>
        <ul className='cards-items'>
        <CardItem />
        </ul>
    </div>
 </div>
</div> */}