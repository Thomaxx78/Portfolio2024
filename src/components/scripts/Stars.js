import React from 'react';

const Star = ({ position }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '30px',
        height: '30px',
        backgroundColor: '#D0AF54',
        borderRadius: '50%',
        left: position.x,
        top: position.y,
        pointerEvents: 'none',
        zIndex: -1
      }}
    ></div>
  );
};

export default Star;
