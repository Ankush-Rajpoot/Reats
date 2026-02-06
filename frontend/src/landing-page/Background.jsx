import React, { useState, useEffect } from 'react';
import Lightning from './Lightning';

const Background = () => {
  const [xOffset, setXOffset] = useState(-1);

  useEffect(() => {
    const updateXOffset = () => {
      if (window.innerWidth < 768) {
        setXOffset(-0.25);
      } else {
        setXOffset(-1);
      }
    };

    // Set initial value
    updateXOffset();

    // Add event listener for window resize
    window.addEventListener('resize', updateXOffset);

    // Cleanup
    return () => window.removeEventListener('resize', updateXOffset);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-screen z-0 bg-black">
      <Lightning
        hue={210}
        xOffset={xOffset}
        speed={1}
        intensity={1}
        size={1}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
    </div>
  );
};

export default Background;
