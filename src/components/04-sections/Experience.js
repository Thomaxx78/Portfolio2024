import React, { Component } from 'react';
import AboutMe from '../04-sections/AboutMe';
import './Experience.css'

class Experience extends Component {
  render() {
    return (
      <section className="experience-section relative min-h-screen transform translate-y-20 z-10">
        <div className="w-full h-20 bg-gradient-to-b from-transparent to-whit absolute top-0 left-0" />
          <div className="experience">
            <div className="experience-content bg-blue min-h-screen p-20 rounded-t-[3rem] shadow-2xl">
            {/* <AboutMe /> */}
          </div>
        </div>
      </section>
      
    );
  }
}

export default Experience;