import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    const { links } = this.props;

    return (
      <div className="presentation text-xl">
        <h1 className='text-2xl text-pink font-extrabold'>Thomas Filhol</h1>
        <p className='text-white/50'>Web developer</p>
      </div>
    );
  }
}

export default Navigation;
