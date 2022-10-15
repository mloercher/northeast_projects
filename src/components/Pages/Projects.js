import React, { useState } from 'react'
import Buttons from '../Buttons';
import Cards from '../Cards'
import Empty from '../Empty';
import project_data from '../project_data'
import './Projects.css'



function Projects() {
  const [projectMenuItem, setProjectMenuItem] = useState(project_data)
  // const [buttons, setButtons] = useState('')


  // empty
  const [empty, setEmpty] = useState(false)


  const filter = (button) => {

    if(button === 'All'){
      setProjectMenuItem(project_data);
      return;
    }


    const filteredData = project_data.filter(project =>  button === project.type)
    console.log(button)
    setProjectMenuItem(filteredData)

   console.log(filteredData)

   if(filteredData.length === 0){
    console.log('no projects found')
    setEmpty(true)
   } else {
    setEmpty(false)
   }
    
  }



  return (

    <div className='project-main'>
      <Buttons filter={filter} />
      {empty ? <Empty /> : <Cards projectMenuItem={projectMenuItem} /> }
    </div>

  )
}

export default Projects;