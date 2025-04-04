import React, { Component } from 'react';
import Navigation from '../03-organisms/navigation'
import Article from '../02-molecules/article/article'
import Paragraph from '../01-atoms/Paragraph'

class Hero extends Component {
  render() {
    const navLinks = [
        {
            name: 'About me'
        },
        {
            name: 'Experience'
        },
        {
            name: 'Projects'
        },
        {
            name: 'Contact'
        },
    ]
    return (
        <div className="flex flex-col justify-between h-full p-8">
            <div className="flex justify-between">
                <Navigation links={navLinks}/>
                <Article />
            </div>
            <div className="flex justify-between items-end">
                <Paragraph />
                <p className="text-lg text-white uppercase font-extrabold">[ scroll to explore ]</p>
            </div>
        </div>
    );
  }
}

export default Hero;

