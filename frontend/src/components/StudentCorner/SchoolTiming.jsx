import React, { useState, useEffect } from 'react';

const SchoolPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hover, setHover] = useState(false);
  
  useEffect(() => {
    // Trigger initial animation after component mounts
    setTimeout(() => setIsLoaded(true), 100);
  }, []);
  
  const timingData = [
    { department: "School Office Hours", timing: "9:00AM TO 3:00PM" },
    { department: "PrePrimary Timing", timing: "9:00AM TO 12:00PM" },
    { department: "Primary Timing", timing: "9:00 TO 3:00PM" },
    // { department: "Secondary Timing", timing: "8:30AM TO 3:30PM" },
    // { department: "Computer Lab", timing: "10:00AM TO 4:00PM" },
    // { department: "Library Hours", timing: "9:00AM TO 4:00PM" }
  ];
  
  return (
    <div className="w-full max-w-4xl mx-auto p-4 font-sans">
      {/* Animated Logo */}
      <div className="flex justify-center mb-8">
        <div 
          className="relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* SVG Logo with animations */}
          <svg 
            width="180" 
            height="180" 
            viewBox="0 0 240 240" 
            className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            {/* Background Circle */}
            <circle 
              cx="120" 
              cy="120" 
              r="110" 
              fill="#4338ca" 
              className={`transition-all duration-500 ${hover ? 'opacity-90' : 'opacity-100'}`} 
            />
            
            {/* Outer Ring */}
            <circle 
              cx="120" 
              cy="120" 
              r="100" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="4" 
              strokeDasharray="628" 
              strokeDashoffset={isLoaded ? "0" : "628"} 
              className="transition-all duration-1500 ease-out" 
            />
            
            {/* Book Shape */}
            <g 
              className={`transition-transform duration-500 ${hover ? 'scale-110' : 'scale-100'}`} 
              style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
            >
              {/* Book Cover */}
              <rect 
                x="80" 
                y="70" 
                width="80" 
                height="100" 
                rx="4" 
                fill="#ffffff" 
                className={`transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '200ms' }} 
              />
              
              {/* Book Spine */}
              <rect 
                x="75" 
                y="70" 
                width="10" 
                height="100" 
                rx="2" 
                fill="#f0f9ff" 
                className={`transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '300ms' }} 
              />
              
              {/* Book Pages */}
              <path 
                d="M80,70 Q120,85 160,70 V170 Q120,155 80,170 Z" 
                fill="#f0f9ff" 
                stroke="#e0e7ff" 
                strokeWidth="1"
                className={`transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '400ms' }} 
              />
            </g>
            
            {/* Pencil */}
            <g 
              className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <rect 
                x="130" 
                y="100" 
                width="60" 
                height="8" 
                rx="2" 
                fill="#fde68a" 
                transform="rotate(45, 140, 120)" 
                className={`transition-transform duration-500 ${hover ? 'translate-x-2' : ''}`}
              />
              <polygon 
                points="183,107 193,117 183,127" 
                fill="#ef4444" 
                transform="rotate(45, 140, 120)" 
                className={`transition-transform duration-500 ${hover ? 'translate-x-2' : ''}`}
              />
            </g>
            
            {/* Decorative Elements */}
            {[...Array(8)].map((_, i) => (
              <circle 
                key={i} 
                cx={120 + 90 * Math.cos(i * Math.PI / 4)} 
                cy={120 + 90 * Math.sin(i * Math.PI / 4)} 
                r="6" 
                fill="#ffffff"
                className={`transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                style={{ transitionDelay: `${700 + i * 100}ms` }}
              />
            ))}
          </svg>
        </div>
      </div>
      
      {/* School Name */}
      <div className="text-center mb-8">
        <h1 
          className={`text-3xl font-bold text-indigo-800 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '1200ms' }}
        >
          ACADEMY PLUS
        </h1>
        <p 
          className={`text-sm font-medium text-indigo-600 mt-2 tracking-wider transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '1400ms' }}
        >
          EXCELLENCE IN EDUCATION
        </p>
      </div>
      
      {/* School Timing Table */}
      <h2 className={`text-2xl font-bold text-center mb-6 text-indigo-800 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1600ms' }}>
        School Timings
      </h2>
      
      <div className={`border border-gray-200 rounded-md overflow-hidden shadow-md transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: '1800ms' }}>
        {/* Header Row */}
        <div className="bg-red-800 text-white flex">
          <div className="py-4 px-6 font-semibold text-lg w-1/2 text-center">
            Class / Department
          </div>
          <div className="py-4 px-6 font-semibold text-lg w-1/2 text-center">
            Timing
          </div>
        </div>
        
        {/* Data Rows */}
        {timingData.map((item, index) => (
          <div 
            key={index} 
            className={`flex border-t border-gray-200 hover:bg-indigo-50 transition-all duration-300 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
            style={{ 
              transitionDelay: `${2000 + index * 100}ms`,
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)'
            }}
          >
            <div className="py-4 px-6 w-1/2 text-center text-red-800 font-medium">
              {item.department}
            </div>
            <div className="py-4 px-6 w-1/2 text-center">
              {item.timing}
            </div>
          </div>
        ))}
      </div>
      
      <div 
        className="text-center mt-6 text-gray-600 text-sm"
        style={{ 
          transitionDelay: '2600ms',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 700ms ease-in-out'
        }}
      >
        * School gates open 30 minutes before the start time
      </div>
    </div>
  );
};

export default SchoolPage;