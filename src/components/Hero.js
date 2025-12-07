import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/hero-video/hero-bg-video1.mp4" type="video/mp4" />
            </video>
          </div>
        
  );
};

export default Hero; 