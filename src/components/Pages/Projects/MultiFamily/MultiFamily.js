import React from 'react';
import phiusLogo from '../../../../assets/images/phiusLogo.png'
import { Table } from 'react-bootstrap';
// import {MultiFamilyPic} from '../../../../assets/images/new_splash_img.JPG'
import '../SingleFamily/SingleFamily.css';
import '../MultiFamily/MultiFamily.css'

function MultiFamily() {
  const tableData = [
    {
      project_name: 'Accord Passive House',
      location: 'Accord, NY',
      certifications: 'PHIUS',
      year: '2018'
    },
    {
      project_name: 'Newburgh Passive House',
      location: 'Newburgh, NY',
      certifications: 'PHIUS',
      year: '2017'
    }
  ];

  return (
    <div className='proj-outside-container'>
      <div className='proj-top-cont-main'>
        <div className='proj-top-container-left'>
          <div className='proj-left-top-info'>
            <h1>Rachel Carson Ecovillage</h1>
            <p>Pittsburgh, PA</p>
            <div style={{ display: "flex", flexDirection: 'column', paddingTop: "5%" }}>
              <p style={{ margin: "0px", fontWeight: 'lighter' }}>PHIUS2021 CORE design certified</p>
              <p style={{ margin: "0px", fontWeight: 'lighter' }}>Architect: </p>
              <p style={{ margin: "0px", fontWeight: 'lighter' }}>Rater: Auros Group </p>
            </div>
          </div>
          <div className='proj-left-bottom-info'>
            <img className='phius-logo' src={phiusLogo}></img>
            <p className='photo-desc'>Photo: Overhaul rendering of completed buildings</p>
          </div>
        </div>
        <div className='mf-proj-top-container-right'>
        </div>
      </div>
      <div className='proj-bottom-container'>
        <div style={{marginTop: '3rem'}}className='border'></div>
        <div className='table-container'>
          <div className='table-container-inside'style={{  maxWidth: '60rem' }}>
            <h1 style={{ color: 'white' }}>Selected Work | <bold>Multi-Family</bold></h1>
            <div style={{width:'100%'}}>
            <p className='proj-description' style={{ color: 'white' }}>
              Since Northeast Projects started in 2017, detached single-family projects have been the core of the proactice. Its portfolio includes award-winning projects (Phiuscon 2018, Phiuscon 2021). Collaboration with local Habitat for Humanity chapters, pre-fabricated and modular construction and works published in Upstate House and Residential Design Magazine.
            </p>
            </div>
            <h2 style={{ color: 'white' }}>Notable Projects</h2>
            <div className='notable-container'>
              <ul>
                <li>Rachel Carson Ecovillage</li>
                <li>North Miller Passive House - Steven Taya Property Development</li>
                <li>College Point Blvd - Bright Power</li>
              </ul>
              <ul>
                <li>Apple ridge II & III - Lassel Architects</li>
                <li>LaMora Senior Living - Perkins Eastman Architects</li>
                <li>326 Rockaway Ave - Bright Power</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiFamily;



{/* <Carousel style={{ height: '100%' }}>
<Carousel.Item style={{ maxHeight: '78vh', objectFit: 'contain', position: 'relative' }}>
  <img
    className="d-block w-100"
    src={gallatinLake}
    alt="First slide"
  />
  <div className="overlay">
    <p>Text Overlay on First Image</p>
  </div>
</Carousel.Item>
<Carousel.Item style={{ maxHeight: '78vh', objectFit: 'cover', position: 'relative' }}>
  <img
    className="d-block w-100"
    src={duboisPoster}
    alt="Second slide"
  />
  <div className="overlay">
    <p>Text Overlay on Second Image</p>
  </div>
</Carousel.Item>
</Carousel> */}

{/* <Table striped bordered hover>
<thead>
  <tr>
    <th>Project Name</th>
    <th>Location</th>
    <th>Certifications</th>
    <th>Year of Completion</th>
  </tr>
</thead>
<tbody>
  {tableData.map((row, index) => (
    <tr key={index}>
      <td>{row.project_name}</td>
      <td>{row.location}</td>
      <td>{row.certifications}</td>
      <td>{row.year}</td>
    </tr>
  ))}
</tbody>
</Table> */}