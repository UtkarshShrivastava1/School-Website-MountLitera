import React from 'react';
"use client";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import image1 from '../assets/c-1.png';
// import image2 from '../assets/c-2.png';
// import image3 from '../assets/c-3.png';
// import image4 from '../assets/c-4.png';

const Carousal = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/6859240/pexels-photo-6859240.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Replace with actual images
      location: "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      text: "Modern Secure and Safe Infrastructure @ MLZS Bilaspur",
    },
    {
      url: "https://images.pexels.com/photos/1633791/pexels-photo-1633791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual images
      location: "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      text: "Modern Secure and Safe Infrastructure @ MLZS Bilaspur",
    },
  ];

  const offers = [
    {
      country: "Bilaspur",
      image: image1, // Replace with actual images
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10 rounded-lg overflow-hidden shadow-lg">
      {/* Background Image */}
      <div
        className="h-[600px] bg-cover bg-center flex flex-col justify-center text-white px-8"
        style={{ backgroundImage: `url(${images[current].url})` }}
      >
        <h1 className="text-4xl font-bold">{images[current].text}</h1>
        <p className="text-lg mt-2">CBSE Affiliation No :  3330519</p>
        

        {/* Location */}
        <p className="absolute bottom-5 left-8 flex items-center gap-2 text-md">
          📍 {images[current].location}
        </p>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800/50 p-3 rounded-full"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800/50 p-3 rounded-full"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Offers */}
      <div className="absolute top-10 right-10 bg-white p-2 rounded-lg shadow-md">
        <span className="text-blue-500 text-xs font-semibold">⭐ Gallery</span>
        <div className="mt-2">
          {offers.map((offer, index) => (
            <div key={index} className="relative">
              <img
                src={offer.image}
                className="w-40 h-24 object-cover rounded-lg"
                alt={offer.country}
              />
              <p className="absolute bottom-2 left-2 text-white font-bold">{offer.country}</p>
            </div>
          ))}
        </div>
      </div>

      {/* School Details */}
      <div className="absolute bottom-0 w-full bg-white p-4 rounded-t-lg shadow-lg">
  <div className="flex items-center justify-between gap-4">
    {/* Pre-Primary School */}
    <div className="flex flex-col flex-1 text-center">
      <h3 className="text-black text-bold text-lg">Pre-Primary School</h3>
      <p className="text-sm">Playgroup to Sr.kg.</p>
    </div>

    {/* Vertical Line */}
    <div className="h-12 w-px bg-gray-300"></div>

    {/* Primary School */}
    <div className="flex flex-col flex-1 text-center">
      <h3 className="text-black text-bold text-lg">Primary School</h3>
      <p className="text-sm">Grade 1 to 5</p>
    </div>

    {/* Vertical Line */}
    <div className="h-12 w-px bg-gray-300"></div>

    {/* Middle School */}
    <div className="flex flex-col flex-1 text-center">
      <h3 className="text-black text-bold text-lg">Middle School</h3>
      <p className="text-sm">Grade 6 to 8</p>
    </div>
  </div>
</div>

    </div>
  );
};


export default Carousal;