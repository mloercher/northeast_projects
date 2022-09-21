import React, { useState } from 'react'
import Buttons from '../Buttons';
import Cards from '../Cards'
import project_data from '../project_data'
import './Projects.css'
// import { Container, Row, Col } from 'react-bootstrap'


const allCategories = ['All', ...new Set(project_data.map(project=> project.category))];

function Projects() {
  const [projectMenuItem, setProjectMenuItem] = useState(project_data)
  const [buttons, setButtons] = useState([])

  const filter = (button) => {

    if(button === 'All'){
      setProjectMenuItem(project_data);
      return;
    }

    const filteredData = project_data.filter(project => project.type === button)
    setProjectMenuItem(filteredData)
    console.log(button)
  }
  return (

    <div className='project-main'>
      <Buttons button={buttons} filter={filter} />
      <Cards projectMenuItem={projectMenuItem} />
    </div>

  )
}

export default Projects;