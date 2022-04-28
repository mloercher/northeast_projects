
import React from 'react';
import NavBar from './components/NavBar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Pages/Home';
import Projects from './components/Pages/Projects'
import Accord from './components/Pages/Accord';
import Footer from './components/Footer';
import Contact from './components/Pages/Contact';

function App() {
  return (

    <Router>
      <NavBar />
      <div className="container-wrap">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/accord' element={<Accord />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
