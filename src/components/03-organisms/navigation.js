import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    const { links } = this.props;

    return (
      <div className="navigation space-y-1 bg-blue/50 p-4 rounded-lg">
        {links.map((link, index) => (
          <div className="flex" key={index}>
            <a href="#" className="text-pink font-extrabold text-lg">0{`${index + 1} `}<span className="uppercase font-extrabold text-white">{link.name}</span></a>
          </div>
        ))}
      </div>
    );
  }
}

export default Navigation;
