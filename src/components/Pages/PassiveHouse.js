import React from 'react'
import './PassiveHouse.css'
import fairShare from '../../assets/images/fairShare.png'
import characteristics from '../../assets/images/characteristicsPH.png'
import phiusgraph from '../../assets/images/PHIUSgraph.png'
import phAlliance from '../../assets/images/phAlliance.png'

function PassiveHouse() {
  return (
    // <div className='phContainer'>
    //   <div id='phRow1'
    //     <h1 id='whatIs'>What is Passive House?</h1>
    //     <p id='whatIsP'>
    //       'Passive House' is a building methodology developed to aggressively meet the climate crisis carbon reduction imperative while making a comfortable, healthy and affordable built environment.
    //       It calls for drastic cuts in the amount of energy our buildings consume through passive methods (insulation, solar heat gain, etc) - hence the name 'Passive House'.
    //       Unlike many other 'green' certifications, the Passive House standard is performance driven, meaning you either pass or fail based on target criteria developed for your specific project.
    //     </p>
    //   </div>
    //   <div id='phRow2'>
    //     {/* <div className='fairShare'> */}
    //     <p id='fairP'>
    //       The underlying math behind the Passive House formula is all based on a fair share principle of Co2 emissions. Our existing American building stock accounts for over 40% of those total emissions and Passive House gives us the opportunity to cut our building's CO2 footprint. As Americans we produce up to 28 tons of CO2 annual (14,000 Watts), but based on the carbon fair share principle, our global fair share is only 2,000 Watts! The Passive House standard is the only way to achieve these drastic CO2 reductions within a reasonable time limit.   (Image: 2000-watt-society.org)
    //     </p>
    //     {/* </div> */}
    //     <img src={fairShare} id='fairPic' alt='fair share principle'></img>
    //   </div>
    //   <div id='phRow3'>
    //     {/* <div className='fairShare'> */}
    //     {/* </div> */}
    //     <img src={characteristics} id='modelPic' alt='fair share principle'></img>
    //     <p id='modelAbout'>
    //       Characteristics of a Passive House
    //       The Passive House system balances total system gains (solar gain, occupant gains) with the total system losses (envelope losses, mechanical losses). The difference between the two is the total energy consumption of your building.
    //       Building envelope losses are addressed by having: 1. Continuous insulation 2. A Thermal bridge-free enclosure 3. An airtight envelope and 4. High performance windows and doors. Mechanical losses are mitigated through a heat recovery system (HRV / ERV). Solar gains are controlled through a solar energy management (shading system) and Occupant gains are up to you! (Image: hammerandhand.com)
    //     </p>
    //   </div>
    //   <div id='phRow4'>
    //     {/* <div className='fairShare'> */}
    //     <p id='row4p'>
    //       The PHIUS+ Certification Program is the leading passive building certification program in North America. It is the only passive building certification that combines a thorough passive house design verification protocol with a stringent Quality Assurance/Quality Control (QA/QC) program performed onsite by highly skilled and specialized PHIUS+ Raters and Verifiers.
    //       The benefits of PHIUS+ certification include:
    //       PHIUS+ 2015 Climate-Specific & Cost-Optimized Performance Metrics*
    //       Comprehensive Design and Energy Model Review
    //       Rigorous Quality Assurance
    //       Earn U.S. DOE Zero Energy Ready Home Status
    //       Earn U.S. EPA Indoor airPLUS label
    //       RESNET HERS Index Score
    //     </p>
    //     <img src={phiusgraph} id='phiusGraph' alt='fair share principle'></img>
    //     {/* </div> */}
    //   </div>
    //   <div id='phRow5'>
    //     <img src={phAlliance} id='phiusAlliance' alt='fair share principle'></img>
    //     {/* <div className='fairShare'> */}
    //     <p id='phiusAbout'>
    //       Passive House Alliance - Hudson Valley (PHA-HV) is the exclusive local chapter of the Passive House Alliance U.S. (PHAUS) in the Northeast region. It provides a robust membership-based network with over 1000 members throughout North America and provides training, resources, marketing, and advocacy support to its members throughout New York, New Jersey, Connecticut, Pennsylvania and New England.
    //     </p>
    //     {/* </div> */}
    //   </div>
    // </div>
    <main>
      <section className="parallax bg1" >
        <h1>What is Passive House?</h1>
      </section>
      <section id="no-parallax1">
        <p id='whatIsP'>
          'Passive House' is a building methodology developed to aggressively meet the climate crisis carbon reduction imperative while making a comfortable, healthy and affordable built environment.
          It calls for drastic cuts in the amount of energy our buildings consume through passive methods (insulation, solar heat gain, etc) - hence the name 'Passive House'.
          Unlike many other 'green' certifications, the Passive House standard is performance driven, meaning you either pass or fail based on target criteria developed for your specific project.
        </p>
      </section>
      <section className="parallax bg2" >
        <h1>Fair Share Principle</h1>
      </section>
      <section id="no-parallax2">
        <p id='fairP'>
          The underlying math behind the Passive House formula is all based on a fair share principle of Co2 emissions. Our existing American building stock accounts for over 40% of those total emissions and Passive House gives us the opportunity to cut our building's CO2 footprint. As Americans we produce up to 28 tons of CO2 annual (14,000 Watts), but based on the carbon fair share principle, our global fair share is only 2,000 Watts! The Passive House standard is the only way to achieve these drastic CO2 reductions within a reasonable time limit.   (Image: 2000-watt-society.org)
        </p>
      </section>
      <section className="parallax bg3">
        <h1>Characteristics of a Passive House</h1>
      </section>
      <section id="no-parallax3">
        <p id='fairP'>
          The Passive House system balances total system gains (solar gain, occupant gains) with the total system losses (envelope losses, mechanical losses). The difference between the two is the total energy consumption of your building.
          Building envelope losses are addressed by having: 1. Continuous insulation 2. A Thermal bridge-free enclosure 3. An airtight envelope and 4. High performance windows and doors. Mechanical losses are mitigated through a heat recovery system (HRV / ERV). Solar gains are controlled through a solar energy management (shading system) and Occupant gains are up to you! (Image: hammerandhand.com)
        </p>
      </section>
      <section className="parallax bg4">
        <h1>PHIUS Certification</h1>
      </section>
      <section id="no-parallax4">
        <p id='fairP'>
          The PHIUS+ Certification Program is the leading passive building certification program in North America. It is the only passive building certification that combines a thorough passive house design verification protocol with a stringent Quality Assurance/Quality Control (QA/QC) program performed onsite by highly skilled and specialized PHIUS+ Raters and Verifiers.
          The benefits of PHIUS+ certification include:
          PHIUS+ 2015 Climate-Specific & Cost-Optimized Performance Metrics*
          Comprehensive Design and Energy Model Review
          Rigorous Quality Assurance
          Earn U.S. DOE Zero Energy Ready Home Status
          Earn U.S. EPA Indoor airPLUS label
          RESNET HERS Index Score
        </p>
      </section>
      <section className="parallax bg5">
        <h1>Passive House Alliance</h1>
      </section>
      <section id="no-parallax5"F>
        <p id='phiusAbout'>
          <a href="https://www.pha-hv.org/" target="_blank" >Passive House Alliance - Hudson Valley (PHA-HV)</a> is the exclusive local chapter of the Passive House Alliance U.S. (PHAUS) in the Northeast region. It provides a robust membership-based network with over 1000 members throughout North America and provides training, resources, marketing, and advocacy support to its members throughout New York, New Jersey, Connecticut, Pennsylvania and New England.
        </p>
      </section>
    </main>
  )
}

export default PassiveHouse