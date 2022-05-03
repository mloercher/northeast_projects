import React from 'react';
import '../../App.css'
import './Home.css'
import '../HeroSection.css'
// import Cards from '../Cards';
import HeroSection from '../HeroSection';
// import HeroSection from '../HeroSection';
import WhatIsPassive from '../WhatIsPassive';




function Home() {
    return (
        <div className='home-container'>
        <HeroSection />
        {/* <WhatIsPassive /> */}
        </div>
    )
}

export default Home;