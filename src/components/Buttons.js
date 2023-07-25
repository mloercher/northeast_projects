import React from 'react'
import './Button.css'
import { Button} from 'react-bootstrap'

function Buttons({filter}) {

  return (
    <div className='button-container'>
      {/* <Button variant="outline-light" classname='catBtn' onClick={() => filter('All')} >All</Button> */}
      <Button variant="outline-light" classname='catBtn' onClick={() => filter('single-family')}>Single-Family</Button>
      <Button variant="outline-light" classname='catBtn' onClick={() => filter('multi-family')}>Multi-Family</Button>
      <Button variant="outline-light" classname='catBtn' onClick={() => filter('commercial')}>Commercial</Button>
      <Button variant="outline-light" classname='catBtn' onClick={() => filter('retrofit')}>Retrofit</Button>
    </div>
  )
}

export default Buttons