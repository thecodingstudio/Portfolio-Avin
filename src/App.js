import React from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';

import { useContext } from 'react';

import { themeContext } from './Context';

import Intro from './components/Intro/intro';

import AboutUs from './components/AboutUs/aboutus';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <Navbar />
      <Intro />
      <AboutUs />
    </div>
  );
}

export default App;
