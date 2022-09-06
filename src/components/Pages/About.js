import React from 'react'
import './About.css'
import friend from '../../assets/images/johnAndFriend.png'
import sketch from '../../assets/images/sketch.png'
import phLogo from '../../assets/images/ph-logo.png'


function About() {
  return (

    <div className='about-container'>
      <div className='about-ne2'>
        <img src={friend} id='friend' alt='meeting'></img>
        <p>
          <span>Northeast Projects</span> is a leading Passive House Consultant group and can help deliver your high performance project within your needs, on time and on budget.<br></br><br></br>Whether it's full Passive House certification, Net-zero, Energy Star or any other form of sustainable building practices, Northeast Projects has the tools to help optimize your project.</p>
      </div>
      <div className='services-container'>
        <div className='services-about'>
          <h2>Services:</h2>
          <ul>
            <li>
              <span>Building Performance Consulting</span>
              <br></br>
              Bring Northeast Projects onto your team and take advantage of dynamic energy model updates integrated into the design process. Consultation includes Drawing review, design walkthrough, mechanical system review, Assembly and detail design as well as energy modeling.
            </li>
            <li>
              <span>Whole Building Energy Modeling</span>
              <br></br>
              The first time a detail is tested should not be in the field. With the use of energy modeling software that addresses both the whole building as well as it’s individual components we can accurately predict a completed project’s success. The best approach to delivering a high-performance project on time and on budget is through an intelligent design and planning process.
            </li>
            <li>
              <span>PH Feasibility Study</span>
              <br></br>
              Dedicated to Passive House, but not sure if your design will meet the standards? Before you fully commit to certification, find out if you’ll make the cut. The feasibility report includes review of the design drawings and a design development energy model that will allow testing of multiple wall assemblies, windows and HVAC systems. Even if Passive House certification is not pursued at the end, this is a valuable service to predict and optimize the performance of your project.
            </li>
            <li>
              <span>Passive House Design and Certification</span>
              <br></br>
              Passive House certification involves many parties and processes. Working with Architects and other Building professionals, develop all required design documentation to submit to the Passive House Institute U.S. Coordinate with certification body, design team and PHIUS+ 2018 rater through design, QA/QC and final certification. Please reach out to talk more about your project and request a proposal.
            </li>
          </ul>


        </div>
        <div className='service-imgs'>
          <img src={sketch} id='services-next' alt='passive house'></img>
          <img src={phLogo} id='passive-logo' alt='ph-logo'></img>
        </div>
      </div>
    </div>

  )
}

export default About