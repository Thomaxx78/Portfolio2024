import React, { Component } from 'react';
import Experience from '../04-sections/Experience';
import Three from '../03-organisms/Three';
import Home from '../04-sections/Home'
import Project from '../04-sections/Project'
import Contact from '../04-sections/Contact';

class Homepage extends Component { 
  render() {
    return (
      <div className="homepage relative">
        <Home />
        
        <Project />
        <Contact />
      </div>
    );
  }
}

export default Homepage;