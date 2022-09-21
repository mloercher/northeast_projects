import React from 'react'
import './Button.css'
import { Button} from 'react-bootstrap'

function Buttons({filter}) {

  return (
    <div className='button-container'>
        <Button variant="outline-dark" classname='btn'type='button' onClick={()=>filter('All')}>All</Button>
        <Button variant="outline-dark" classname='btn'type='button' onClick={()=>filter('single-family')}>Single-Family</Button>
        <Button variant="outline-dark" classname='btn'type='button' onClick={()=>filter('multi-family')}>Multi-Family</Button>
        <Button variant="outline-dark" classname='btn'type='button' onClick={()=>filter('commercial')}>Commercial</Button>
        <Button variant="outline-dark" classname='btn'type='button' onClick={()=>filter('retrofit')}>Retrofit</Button>
    </div>
  )
}

export default Buttons