
import React from 'react';
import NavBar from './components/NavBar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Page components
// import HomeOld from './components/Pages/HomeOld';
// import Projects from './components/Pages/Projects'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import PassiveHouse from './components/Pages/PassiveHouse';
import SingleFamily from './components/Pages/Projects/SingleFamily/SingleFamily';
import MultiFamily from './components/Pages/Projects/MultiFamily/MultiFamily'
import Retrofit from './components/Pages/Projects/Retrofit/Retrofit'
import Commercial from './components/Pages/Projects/Commercial/Commercial'
// import SingleFam from './components/Pages/SingleFam';
// import MultiFam from './components/Pages/MultiFam';
// import Commercial from './components/Pages/Commercial';
// import Retro from './components/Pages/Retro';



// Individual Project components
import Accord from './components/Pages/Accord';
import Footer from './components/Footer';
import Contact from './components/Pages/Contact';
import Newburgh from './components/Pages/Newburgh';
import Gallatin from './components/Pages/Gallatin';
import Hilltop from './components/Pages/Hilltop';
import Dubois from './components/Pages/Dubois';
import Pr from './components/Pages/Pr';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        {/* <div className="container-wrap"> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/northeast_projects' element={<Home />} />
          <Route exact path='/services' element={<Services />} />
          {/* <Route exact path='/projects' element={<Projects />} /> */}
          <Route exact path="/projects/single-family" element={<SingleFamily />} />
          <Route exact path="/projects/multi-family" element={<MultiFamily />} />
          <Route exact path="/projects/retrofit" element={<Retrofit />} />
          <Route exact path="/projects/commercial" element={<Commercial />} />
          <Route exact path='/passiveHouse' element={<PassiveHouse />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/accord' element={<Accord />} />
          <Route exact path='/newburgh' element={<Newburgh />} />
          <Route exact path='/gallatin' element={<Gallatin />} />
          <Route exact path='/hilltop' element={<Hilltop />} />
          <Route exact path='/dubois' element={<Dubois />} />
          <Route exact path='/pr' element={<Pr />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;






