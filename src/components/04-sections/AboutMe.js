import React, { Component } from 'react';
import Navigation from '../03-organisms/navigation'
import Article from '../02-molecules/article/article'
import Paragraph from '../01-atoms/Paragraph'
import Roles from '../02-molecules/roles/Roles'

class AboutMe extends Component {
  render() {
    const roles = [
      {
        title: "FRONT DEVELOPER",
        description: "De tous les aspects de performance de votre site web, l'expérience utilisateur (UX) est l'un des principaux facteurs qui déterminent le trafic sur votre site et, par conséquent...",
      },
      {
        title: "PROJECT MANAGER",
        description: "De tous les aspects de performance de votre site web, l'expérience utilisateur (UX) est l'un des principaux facteurs qui déterminent le trafic sur votre site et, par conséquent...",
      },
    ]
    return (
        <div className="about-me">
          <h2 className="text-white text-6xl">ABOUT ME</h2>
          <Roles roles={roles}/>
          <div className="skills grid grid-cols-12 py-20 gap-y-20">
            <div className="skill flex col-start-2 col-span-11 gap-8">
              <h3 className="text-6xl uppercase text-white whitespace-nowrap">Creative Dev</h3>
              <p className="p-base text-white">I craft websites that align with your brand and engage your audience – creating meaningful and memorable experiences.</p>
            </div>
            <div className="skill flex col-start-4 col-span-8 gap-8">
              <h3 className="text-6xl uppercase text-white whitespace-nowrap">Creative Dev</h3>
              <p className="p-base text-white">I craft websites that align with your brand and engage your audience – creating meaningful and memorable experiences.</p>
            </div>
            <div className="skill flex col-start-1 col-span-5 gap-8">
              <h3 className="text-6xl uppercase text-white whitespace-nowrap">SEO</h3>
              <p className="p-base text-white">I craft websites that align with your brand and engage your audience – creating meaningful and memorable experiences.</p>
            </div>

            <div className="skill flex col-start-7 col-span-5 gap-8">
              <h3 className="text-6xl uppercase text-white whitespace-nowrap">ACCESS</h3>
              <p className="p-base text-white">I craft websites that align with your brand and engage your audience – creating meaningful and memorable experiences.</p>
            </div>
          </div>
        </div>
    );
  }
}

export default AboutMe;

