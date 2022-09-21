import React from 'react'

function Buttons({filter}) {

  return (
    <div>
        <button type='button' onClick={()=>filter('All')} >All</button>
        <button type='button' onClick={()=>filter('single-family')}>Single-Family</button>
        <button type='button' onClick={()=>filter('multi-family')}>Multi-Family</button>
        <button type='button' onClick={()=>filter('commercial')}>Commercial</button>
        <button type='button' onClick={()=>filter('retrofit')}>Retrofit</button>
    </div>
  )
}

export default Buttons