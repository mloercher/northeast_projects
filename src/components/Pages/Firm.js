import React from 'react'
import './Firm.css'
import friend from '../../assets/images/johnAndFriend.png'



function Firm() {
  return (

    <div className='about-container'>
      <div className='about-ne2'>
        <img src={friend} id='friend' alt='meeting'></img>
        <p>
          <span>Northeast Projects</span> is a leading Passive House Consultant group and can help deliver your high performance project within your needs, on time and on budget.<br></br><br></br>Whether it's full Passive House certification, Net-zero, Energy Star or any other form of sustainable building practices, Northeast Projects has the tools to help optimize your project.</p>
      </div>
    </div>

  )
}

export default Firm