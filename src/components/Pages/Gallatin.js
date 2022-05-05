import React from 'react'
import './Accord.css';

function Gallatin() {
    return (
        <div className='accord-container'>
            <div className='title-img'>
                <img src='../images/gallatin/sideEleBlast.jpg' alt='accord passive house' id='img_proj'></img>
                <h1 id='proj_name'>Gallatin Passive House</h1>
                <h5 id='proj_location'>Gallatin, NY</h5>
            </div>
            <div className='accord-info'>
                <div className='accord-stats'>
                    <div className='category'>
                        <p className='title'>Type:</p>
                        <p className='stat'>Single-Family</p>
                    </div>
                    |
                    <div className='category'>
                        <p className='title'>iCFA</p>
                        <p className='stat'>2,755 ft2</p>
                    </div>
                    |
                    <div className='category'>
                        <p className='title'>Climate</p>
                        <p className='stat'>5a</p>
                    </div>
                    |
                    <div className='category'>
                        <p className='title'>Surface/iCFA</p>
                        <p className='stat'>2.785</p>
                    </div>
                    |
                    <div className='category'>
                        <p className='title'>Heating Demand</p>
                        <p className='stat'>5.76 kBTU/ft2.yr</p>
                    </div>
                    |
                    <div className='category'>
                        <p className='title'>Cooling Demand</p>
                        <p className='stat'>.96 kBTU/ft2.yr</p>
                    </div>
                    |
                    <div className='category'>
                        <p className='title'>Heating Load</p>
                        <p className='stat'>4.31 BTU/hr.ft2</p>
                    </div>
                    |
                    <div className='category'>
                        <p className='title'>Cooling Load</p>
                        <p className='stat'>2.19 BTU/hr.ft2</p>
                    </div>
                    |
                    <div className='category'>
                        <p className='title'>Source Energy</p>
                        <p className='stat'>5,441 kWh/ea.yr</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallatin