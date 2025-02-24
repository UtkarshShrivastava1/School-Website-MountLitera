import React from "react";
import image1 from '../assets/c-1.png';
import image2 from '../assets/c-2.png';
import image3 from '../assets/c-3.png';
import image4 from '../assets/c-4.png';

const ExploreClassrooms = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Left Section */}
      <div className="md:col-span-1 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Explore Our Classrooms</h1>
        <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">DIVE IN &gt;</a>
      </div>
      
      {/* Image Grid */}
      <div className="md:col-span-2 grid grid-cols-3 md:grid-cols-4 gap-2">
        <img src={image1} alt="Art" className="w-full h-40 object-cover" />
        <img src={image2} alt="Reading" className="w-full h-40 object-cover" />
        <img src={image3} alt="Play Area" className="w-full h-40 object-cover" />
        <img src={image1} alt="Tablet Learning" className="w-full h-40 object-cover hidden md:block" />
        <img src={image2} alt="Outdoor Activity" className="w-full h-40 object-cover" />
        <img src={image3} alt="Costume Play" className="w-full h-40 object-cover" />
        <img src={image4} alt="Books" className="w-full h-40 object-cover" />
      </div>
    </div>
  );
};

export default ExploreClassrooms;
