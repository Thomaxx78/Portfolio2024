import React, { Component } from 'react';
import './article.scss';

class Navigation extends Component {
  render() {
    const { links } = this.props;

    return (
      <div className="presentation mt-4 md:mt-0 mx-auto md:mx-0 text-center md:text-start">
        <h1 className='title text-pink font-extrabold'>Thomas Filhol</h1>
        <p className='description text-white/50'>Web developer</p>
      </div>
    );
  }
}

export default Navigation;
