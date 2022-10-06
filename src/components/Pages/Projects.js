import React, { useState } from 'react'
import Buttons from '../Buttons';
import Cards from '../Cards'
import project_data from '../project_data'
import './Projects.css'



function Projects() {
  const [projectMenuItem, setProjectMenuItem] = useState(project_data)
  // const [buttons, setButtons] = useState('')

  const filter = (button) => {

    if(button === 'All'){
      setProjectMenuItem(project_data);
      return;
    }

    const filteredData = project_data.filter(project =>  button === project.type)
    console.log(button)
    setProjectMenuItem(filteredData)
    
  }
  return (

    <div className='project-main'>
      <Buttons filter={filter} />
      <Cards projectMenuItem={projectMenuItem} />
    </div>

  )
}

export default Projects;