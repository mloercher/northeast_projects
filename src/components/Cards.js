import React from 'react'
// import CardItem from './CardItem'
import './Cards.css'
import { Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import project_data from './project_data'

// import accord_crop from '../assets/images/accord_crop.png'
// import newburgh_proj from '../assets/images/newburgh_proj.png'
// import sideEleBlast from '../assets/images/gallatin/sideEleBlast.jpg'
// import alt_long1 from '../assets/images/hilltop/alt_long1.jpg'
// import dubois_Poster from '../assets/images/dubois/poster.jpg'
// import whyNot from '../assets/images/pr/whyNot.jpg'



function Cards() {
//   const project_data = [
//     {
//         link: '/accord',
//         title: 'Accord Passive House',
//         text: '2018 PHIUS Design Competition Honorable Mention: Residential',
//         img: {accord_crop},
//         id:'1'
//       },
//       {
//         link: '/newburgh',
//         title: 'Newburgh Passive House',
//         text: '2018 PHIUS Design Competition Honorable Mention: Residential',
//         img: {newburgh_proj},
//         id:'2'
//       },
//       {
//         link: '/gallatin',
//         title: 'Gallatin Passive House',
//         text: '2018 PHIUS Design Competition Honorable Mention: Residential',
//         img: {sideEleBlast},
//         id:'3'
//       },
//       {
//         link: '/hilltop',
//         title: 'Hilltop Passive House',
//         text: '2018 PHIUS Design Competition Honorable Mention: Residential',
//         img: {alt_long1},
//         id:'4'
//       },
//       {
//         link: '/dubois',
//         title: 'Dubois Passive House',
//         text: '2018 PHIUS Design Competition Honorable Mention: Residential',
//         img: {dubois_Poster},
//         id:'5'
//       },
//       {
//         link: '/pr',
//         title: 'PR Passive House',
//         text: '2018 PHIUS Design Competition Honorable Mention: Residential',
//         img: {whyNot},
//         id:'6'
//       }
// ]
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