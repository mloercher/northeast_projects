import React from 'react';
import phiusLogo from '../../../../assets/images/phiusLogo.png'
import { Table } from 'react-bootstrap';

import '../SingleFamily/SingleFamily.css';

function SingleFamily() {
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
            <h1>Gallatin Passive House</h1>
            <div style={{ display: "flex", flexDirection: 'column', paddingTop: "5%" }}>
              <p style={{ margin: "0px", fontWeight: 'lighter' }}>PHIUS+ 2018 Certified</p>
              <p style={{ margin: "0px", fontWeight: 'lighter' }}>Architect: North River Architecture and Planning</p>
              <p style={{ margin: "0px", fontWeight: 'lighter' }}>Builder: North River Design Build </p>
            </div>
          </div>
          <div className='proj-left-bottom-info'>
            <img className='phius-logo' src={phiusLogo}></img>
            <p style={{ color: "white", padding: "10px 0px 0px 0px", fontStyle: 'italic', fontWeight: 'lighter' }}>Photo: Exterior at lift-and-slide wall</p>
          </div>
        </div>
        <div className='proj-top-container-right'>
        </div>
      </div>
      <div className='proj-bottom-container'>
        <div style={{marginTop: '3rem'}}className='border'></div>
        <div className='table-container'>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '60rem' }}>
            <h1 style={{ color: 'white' }}>Selected Work | Single-Family</h1>
            <p style={{ color: 'white' }}>
              Since Northeast Projects started in 2017, detached single-family projects have been the core of the proactice. Its portfolio includes award-winning projects (Phiuscon 2018, Phiuscon 2021). Collaboration with local Habitat for Humanity chapters, pre-fabricated and modular construction and works published in Upstate House and Residential Design Magazine.
            </p>
            <h2 style={{ color: 'white' }}>Notable Projects</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <ul>
                <li>- Gallatin Passive House</li>
                <li>- Black Duck Dove Passive - Steve Baczek Architecture</li>
                <li>- Harmony House - DEMO Architects</li>
              </ul>
              <ul>
                <li>- Accord Passive House - North River Architecture and Planning</li>
                <li>- Mountain Park Passive - Andrew Webster / Graphite Studio</li>
                <li>- Montem Villam Passive House - Richard Pedranti Architects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleFamily;



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