import React from 'react';
import image1 from '../assets/c-1.png';
import image2 from '../assets/c-2.png';
import image3 from '../assets/c-3.png';
import image4 from '../assets/c-4.png';

const CommunityVoices = () => {
  const sections = [
    {
      title: "Primary School",
      imgSrc: image1,
      alt: "Lower School Students",
      description: "Experience the joy of early learning in our nurturing Lower School environment where young minds flourish through discovery and play."
    },
    {
      title: "Lower School",
      imgSrc: image2,
      alt: "Middle School Students",
      description: "Our Middle School program empowers students to explore their interests while developing critical thinking and leadership skills."
    },
    {
      title: "Middle School",
      imgSrc: image3,
      alt: "Upper School Students",
      description: "Upper School students engage in rigorous academics, innovative research, and meaningful community engagement."
    },
    {
      title: "Upper School",
      imgSrc: image4,
      alt: "Upper School",
      description: "Our alumni network continues to make lasting impacts across the globe, carrying forward our values of excellence and service."
    }
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        <h1 className="text-center text-[2.5rem] font-serif text-[#8B1D24] mb-12">
        Academic Levels & Classes
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden group h-[400px] cursor-pointer"
            >
              {/* Image and gradient overlay */}
              <div className="absolute inset-0">
                <img
                  src={section.imgSrc}
                  alt={section.alt}
                  className="w-full h-full object-cover"
                />
                {/* Base overlay */}
                <div className="absolute inset-0 bg-black/40 transition-all duration-500" />
                
                {/* Hover overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
              
              {/* Title and content container */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                {/* Title - stays visible */}
                <h2 className="text-2xl font-bold tracking-wide z-10">
                  {section.title}
                </h2>
                
                {/* Description and button - appear on hover */}
                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 space-y-4">
                  <p className="text-sm leading-relaxed">
                    {section.description}
                  </p>
                  <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-300 text-sm font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityVoices;