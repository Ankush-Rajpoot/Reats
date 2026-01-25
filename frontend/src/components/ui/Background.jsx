import React from 'react';
import Lightning from './Lightning';

const Background = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-screen z-0 bg-black">
      <Lightning
        hue={210}
        xOffset={-1}
        speed={1}
        intensity={1}
        size={1}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
    </div>
  );
};

export default Background;
