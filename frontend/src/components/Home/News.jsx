import React, { useState, useEffect } from 'react';
import image1 from '../../assets/c-1.png';
import image2 from '../../assets/c-2.png';
import image3 from '../../assets/c-3.png';
import image4 from '../../assets/c-4.png';

const NewsSection = () => {
  const [position, setPosition] = useState(0);
  
  // Sun animation effect
//   useEffect(() => {
//     const animateSun = () => {
//       const maxPosition = 100;
//       const interval = setInterval(() => {
//         setPosition(prevPosition => {
//           const newPosition = prevPosition + 0.1;
//           return newPosition > maxPosition ? 0 : newPosition;
//         });
//       }, 50);
      
//       return () => clearInterval(interval);
//     };
    
//     const animation = animateSun();
//     return () => animation;
//   }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Sun Animation */}
      {/* <div className="relative overflow-hidden h-16 mb-6">
        <div 
          className="absolute w-16 h-16 bg-yellow-400 rounded-full"
          style={{
            left: `${position}%`,
            top: '0',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 40px 15px rgba(255, 204, 0, 0.4)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-orange-500 rounded-full animate-pulse"></div>
        </div>
      </div> */}
      
      {/* Heading with decorative lines */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-red-800 px-6">Latest News</h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>
      
      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Featured Article - Takes 2/3 width on desktop */}
        <div className="lg:col-span-2 relative">
          <div className="relative h-80 md:h-96 lg:h-120 overflow-hidden">
            <img 
            src={image1} 
              alt="Black Alumni Alliance Summit" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 md:p-6">
              <h3 className="text-xl md:text-3xl font-bold text-white">
                The 2025 Black Alumni Alliance Hosts Its Fourth Summit
              </h3>
            </div>
          </div>
        </div>
        
        {/* Sidebar - Recent Stories */}
        <div className="bg-gray-50 p-6 border border-gray-200">
          <h4 className="text-gray-400 font-medium mb-4">RECENT STORIES</h4>
          
          <div className="space-y-6">
            <div className="pb-4 border-b border-gray-200">
              <a href="#" className="block text-lg font-medium text-orange-500 hover:text-orange-700">
                Students Stage a Classroom Takeover
              </a>
            </div>
            
            <div className="pb-4 border-b border-gray-200">
              <a href="#" className="block text-lg font-medium text-orange-500 hover:text-orange-700">
                Equity, Justice, and Community: Opening Minds by Sharing Stories
              </a>
            </div>
            
            <div className="pb-4 border-b border-gray-200">
              <a href="#" className="block text-lg font-medium text-orange-500 hover:text-orange-700">
                Lunar New Year
              </a>
            </div>
            
            <div className="pb-4 border-b border-gray-200">
              <a href="#" className="block text-lg font-medium text-orange-500 hover:text-orange-700">
                In Memoriam: Bruce Stewart
              </a>
            </div>
            
            <div className="mt-6">
              <a href="#" className="inline-block px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;