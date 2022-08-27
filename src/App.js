
import React from 'react';
import NavBar from './components/NavBar';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Pages/Home';
import About from './components/Pages/About'
import Projects from './components/Pages/Projects'
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

    <Router>
      <NavBar />
      <div className="container-wrap">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/northeast_projects' element={<Home />}/>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/accord' element={<Accord />} />
          <Route exact path='/newburgh' element={<Newburgh />} />
          <Route exact path='/gallatin' element={<Gallatin />} />
          <Route exact path='/hilltop' element={<Hilltop />} />
          <Route exact path='/dubois' element={<Dubois />} />
          <Route exact path='/pr' element={<Pr />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
