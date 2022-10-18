
import React from 'react';
import NavBar from './components/NavBar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css'

// Page components
import Home from './components/Pages/Home';
import Firm from './components/Pages/Firm'
import Services from './components/Pages/Services'
import Projects from './components/Pages/Projects'
import PassiveHouse from './components/Pages/PassiveHouse';
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
          <Route exact path='/' element={<Firm />} />
          <Route exact path='/northeast_projects' element={<Firm />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/passiveHouse' element={<PassiveHouse />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/accord' element={<Accord />} />
          <Route exact path='/newburgh' element={<Newburgh />} />
          <Route exact path='/gallatin' element={<Gallatin />} />
          <Route exact path='/hilltop' element={<Hilltop />} />
          <Route exact path='/dubois' element={<Dubois />} />
          <Route exact path='/pr' element={<Pr />} />
        </Routes>
        {/* </div> */}
      </Router>
      <Footer />
    </>
  );
}

export default App;







{/* <Route exact path='/singleFam' element={<SingleFam />} />
<Route exact path='/multiFam' element={<MultiFam />} />
<Route exact path='/commercial' element={<Commercial />} />
<Route exact path='/retro' element={<Retro />} /> */}