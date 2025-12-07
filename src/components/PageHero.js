import React from 'react';

const PageHero = ({ title, description }) => {
  return (
    <div className="relative h-[30vh] mb-8 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* Local Video Background */}
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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-0 px-2 md:pl-0 lg:pl-2 py-6 z-20 pt-20">
        <div className="animate-fadeIn max-w-2xl ml-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight backdrop-blur-sm bg-black/5 p-4 rounded-lg">
            {title}
          </h1>
          {description && (
            <p className="text-base md:text-lg text-white/90 max-w-xl backdrop-blur-sm bg-black/5 p-4 rounded-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHero; 