import React, { Component } from 'react';
import './navigation.scss';

class Navigation extends Component {
  scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const run = easeInOutCubic(progress) * distance + startPosition;

      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  handleClick = (e, link) => {
    e.preventDefault();
    this.scrollToSection(link.name);
  };

  render() {
    const { links } = this.props;

    return (
      <div>
        <div className="navigation w-fit md:space-y-1 bg-blue/50 p-0 md:p-4 rounded-lg z-100 backdrop-blur-md backdrop-brightness-75 flex items-center justify-between">
          <div className="navigation-desktop flex flex-col space-y-1">
            {links.map((link, index) => (
              <a
                key={index}
                href={`#${link.name}`}
                onClick={(e) => this.handleClick(e, link)}
                className="nav-item w-full text-pink font-extrabold text-lg"
              >
                0{`${index + 1} `}
                <span className="uppercase font-extrabold text-white">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
