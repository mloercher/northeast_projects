
import React from 'react';
import NavBar from './components/NavBar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Pages/Home';



function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
