import React, { useState, } from 'react'
import { set } from 'react-hook-form';
import Buttons from '../Buttons';
import Cards from '../Cards'
import Empty from '../Empty';
import project_data from '../project_data'
import './Projects.css'




function Projects() {
  const [projectMenuItem, setProjectMenuItem] = useState(project_data)
  // const [buttons, setButtons] = useState('')


  // no projects that fit selected category
  const [empty, setEmpty] = useState(false)


  const filter = (button) => {

    if (button === 'All') {
      setProjectMenuItem(project_data);

      console.log(project_data)
      setEmpty(false)
      console.log(empty)

      return;

    }

    const filteredData = project_data.filter(project => button === project.type)
    console.log(button)
    setProjectMenuItem(filteredData)

    console.log(filteredData)

    //  display 'empty' component if no projects fit project type selected
    if (filteredData.length === 0) {
      console.log('no projects found')
      setEmpty(true)
    } else {
      setEmpty(false)
    }



  }



  return (

    <div className='project-main'>
      <Buttons filter={filter} />
      {empty ? <Empty /> : <Cards projectMenuItem={projectMenuItem} />}
    </div>

  )
}

export default Projects;