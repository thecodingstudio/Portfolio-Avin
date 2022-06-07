import React from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';

// import { useContext } from 'react';

// import { themeContext } from './Context';

import Intro from './components/Intro/intro';

import AboutUs from './components/AboutUs/aboutus';

import Services from './components/Services/services';

import Workflow from './components/Workflow/workflow';

import Contact from './components/Contact/contact';

import Portfolio from './components/PortFolio/portfolio';

import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutUs />
      <Services />
      <Workflow />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
