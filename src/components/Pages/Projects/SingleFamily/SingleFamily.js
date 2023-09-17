import React from 'react';
import gallatinLake from '../../../../assets/images/gallatin/newlake.png';
import duboisPoster from '../../../../assets/images/dubois/poster.jpg';
import { Carousel } from 'react-bootstrap';
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
      <div className='proj-top-container'>
        <Carousel style={{ height: '100%' }}>
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
        </Carousel>
      </div>
      <div className='proj-bottom-container'>
        <div className='table-container'>
          <h1 style={{color:'white'}}>Single-Family Projects</h1>
          <Table striped bordered hover>
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
          </Table>
        </div>
      </div>
    </div>
  );
}

export default SingleFamily;
