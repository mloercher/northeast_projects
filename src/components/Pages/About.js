import React from 'react'
import './About.css'


function About() {
  return (

    <div className='about-container'>
      <div className='about-ne2'>
        <img src='../images/johnAndFriend.png' id='friend' alt='meeting'></img>
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
        <img src='../images/hero_crop.png' id='services-next' alt='passive house'></img>
      </div>
      {/* <div className='what-is-container'>
        <div className='cont-1'>
          <div className='title-1'>
            <h2>What is Passive House?</h2>
          </div>
          <div className='what-is-p'>
            <p>
              'Passive House' is a building methodology developed to aggressively meet the climate crisis carbon reduction imperative while making a comfortable, healthy and affordable built environment. It calls for drastic cuts in the amount of energy our buildings consume through passive methods (insulation, solar heat gain, etc) - hence the name 'Passive House'. Unlike many other 'green' certifications, the Passive House standard is performance driven, meaning you either pass or fail based on target criteria developed for your specific project.
            </p>
          </div>
        </div>
        <div className='cont-2'>
          <h2>Fair Share Principle</h2>
          <img src='../images/fairShare.png' id='fairShare' alt='fair model'></img>
          <p>
            The underlying math behind the Passive House formula is all based on a fair share principle of Co2 emissions. Our existing American building stock accounts for over 40% of those total emissions and Passive House gives us the opportunity to cut our building's CO2 footprint. As Americans we produce up to 28 tons of CO2 annual (14,000 Watts), but based on the carbon fair share principle, our global fair share is only 2,000 Watts! The Passive House standard is the only way to achieve these drastic CO2 reductions within a reasonable time limit.   (Image: 2000-watt-society.org)
          </p>
        </div>
        <div className='cont-3'>
          <h2>Passive House Institute U.S.</h2>
          <p>
            The PHIUS+ Certification Program is the leading passive building certification program in North America. It is the only passive building certification that combines a thorough passive house design verification protocol with a stringent Quality Assurance/Quality Control (QA/QC) program performed onsite by highly skilled and specialized PHIUS+ Raters and Verifiers.



            The benefits of PHIUS+ certification include:

            PHIUS+ 2015 Climate-Specific + Cost-Optimized Performance Metrics*

            Comprehensive Design and Energy Model Review

            Rigorous Quality Assurance

            Earn U.S. DOE Zero Energy Ready Home Status

            Earn U.S. EPA Indoor airPLUS label

            RESNET HERS Index Score
          </p>
          <h2>Passive House Alliance - Hudson Valley</h2>
          <p>
            Passive House Alliance – Hudson Valley (PHA-HV) is the exclusive local chapter of the Passive House Alliance U.S. (PHAUS) in the Northeast region. It provides a robust membership-based network with over 1000 members throughout North America and provides training, resources, marketing, and advocacy support to its members throughout New York, New Jersey, Connecticut, Pennsylvania and New England.
          </p>
        </div>
      </div> */}
    </div>

  )
}

export default About