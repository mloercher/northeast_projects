import React from 'react'
import './PassiveHouse.css'
import fairShare from '../../assets/images/fairShare.png'
import characteristics from '../../assets/images/characteristicsPH.png'
import phiusgraph from '../../assets/images/PHIUSgraph.png'
import phAlliance from '../../assets/images/phAlliance.png'

function PassiveHouse() {
  return (
    <>
      <div className='phTop'>
        <h1 id='whatIs'>What is Passive House?</h1>
        <p id='aboutNE'>'Passive House' is a building methodology developed to aggressively meet the climate crisis carbon reduction imperative while making a comfortable, healthy and affordable built environment. It calls for drastic cuts in the amount of energy our buildings consume through passive methods (insulation, solar heat gain, etc) - hence the name 'Passive House'. Unlike many other 'green' certifications, the Passive House standard is performance driven, meaning you either pass or fail based on target criteria developed for your specific project. </p>
      </div>
      <div className='fairShare'>
        {/* <div className='fairShare'> */}
          <p id='fairAbout'>
            The underlying math behind the Passive House formula is all based on a fair share principle of Co2 emissions. Our existing American building stock accounts for over 40% of those total emissions and Passive House gives us the opportunity to cut our building's CO2 footprint. As Americans we produce up to 28 tons of CO2 annual (14,000 Watts), but based on the carbon fair share principle, our global fair share is only 2,000 Watts! The Passive House standard is the only way to achieve these drastic CO2 reductions within a reasonable time limit.   (Image: 2000-watt-society.org)
          </p>
        {/* </div> */}
        <img src={fairShare} id='fairPic' alt='fair share principle'></img>
      </div>
      <div className='fairShare'>
        {/* <div className='fairShare'> */}
          <p id='fairAbout'>
            The underlying math behind the Passive House formula is all based on a fair share principle of Co2 emissions. Our existing American building stock accounts for over 40% of those total emissions and Passive House gives us the opportunity to cut our building's CO2 footprint. As Americans we produce up to 28 tons of CO2 annual (14,000 Watts), but based on the carbon fair share principle, our global fair share is only 2,000 Watts! The Passive House standard is the only way to achieve these drastic CO2 reductions within a reasonable time limit.   (Image: 2000-watt-society.org)
          </p>
        {/* </div> */}
        <img src={characteristics} id='characteristicsPic' alt='fair share principle'></img>
      </div>
      <div className='fairShare'>
        {/* <div className='fairShare'> */}
          <p id='fairAbout'>
            The underlying math behind the Passive House formula is all based on a fair share principle of Co2 emissions. Our existing American building stock accounts for over 40% of those total emissions and Passive House gives us the opportunity to cut our building's CO2 footprint. As Americans we produce up to 28 tons of CO2 annual (14,000 Watts), but based on the carbon fair share principle, our global fair share is only 2,000 Watts! The Passive House standard is the only way to achieve these drastic CO2 reductions within a reasonable time limit.   (Image: 2000-watt-society.org)
          </p>
        {/* </div> */}
      </div>
        <img src={phiusgraph} id='phiusGraph' alt='fair share principle'></img>
      <div className='fairShare'>
        {/* <div className='fairShare'> */}
          <p id='fairAbout'>
            The underlying math behind the Passive House formula is all based on a fair share principle of Co2 emissions. Our existing American building stock accounts for over 40% of those total emissions and Passive House gives us the opportunity to cut our building's CO2 footprint. As Americans we produce up to 28 tons of CO2 annual (14,000 Watts), but based on the carbon fair share principle, our global fair share is only 2,000 Watts! The Passive House standard is the only way to achieve these drastic CO2 reductions within a reasonable time limit.   (Image: 2000-watt-society.org)
          </p>
        {/* </div> */}
        <img src={phAlliance} id='phiusAlliance' alt='fair share principle'></img>
      </div>
    </>
  )
}

export default PassiveHouse