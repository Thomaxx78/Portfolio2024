import React, { Component } from 'react';
import Experience from '../04-sections/Experience';
import Three from '../03-organisms/Three';
import Home from '../04-sections/Home'
import Project from '../04-sections/Project'

class Homepage extends Component { 
  render() {
    return (
      <div className="homepage relative">
        <Home />
        <Experience />
        <div className="h-[150vh] bg-dark-blue">
          <Project />
        </div>
      </div>
    );
  }
}

export default Homepage;