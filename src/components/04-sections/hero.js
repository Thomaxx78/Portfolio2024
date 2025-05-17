import React, { Component } from 'react';
import Navigation from '../03-organisms/navigation';
import Article from '../02-molecules/article/article';
import Paragraph from '../01-atoms/Paragraph';
import './hero.scss';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight * 0.3;
    this.setState({ showContent: scrollY < windowHeight });
  };

  render() {
    const { showContent } = this.state;

    return (
      <div className="flex flex-col justify-between h-full p-4 md:p-8 transition-all duration-700 ease-in-out">
        <div className="flex flex-col md:flex-row justify-between">
          <div className={`transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <Navigation links={[
              { name: 'Home' },
              { name: 'Projects' },
              { name: 'Contact' },
            ]} />
          </div>
          {/* Fade-out Article */}
          <div className={`transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <Article />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end">
          {/* Fade-out Paragraph */}
          <div className={`transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <Paragraph />
          </div>

          {/* Fade-out Scroll Text */}
          <p className={`text-lg text-white uppercase font-extrabold scroll-text transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            [ scroll to explore ]
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;
