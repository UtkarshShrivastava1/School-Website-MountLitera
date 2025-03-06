import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from '../../assets/c-1.png';
import image2 from '../../assets/c-2.png';
import image3 from '../../assets/c-3.png';
import image4 from '../../assets/c-4.png';

const WelcomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      imgSrc: image3,
      title: "Welcome",
      mainText: "Sidwell Friends School",
      description: "A dynamic learning community grounded in Quaker values.",
      buttonText: "Enquiry"
    },
    {
      id: 2,
      imgSrc: image2,
      title: "Our Students",
      mainText: "Nurturing Bright Minds",
      description: "Creating an environment where every student can thrive and grow.",
      buttonText: "DISCOVER MORE"
    },
    {
      id: 3,
      imgSrc: image1,
      title: "Our Faculty",
      mainText: "Dedicated Educators",
      description: "Expert teachers committed to inspiring the next generation.",
      buttonText: "MEET OUR TEAM"
    },
    {
      id: 4,
      imgSrc: image4,
      title: "Our Faculty",
      mainText: "Dedicated Educators",
      description: "Expert teachers committed to inspiring the next generation.",
      buttonText: "MEET OUR TEAM"
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.imgSrc}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay - Bottom only */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Content Container - Bottom Left */}
          <div className="absolute bottom-16 left-0 w-full">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
              <div className="max-w-lg">
                {/* Small Title */}
                <div className="overflow-hidden mb-5">
                  <h2 className="text-emerald-400 text-5xl font-medium tracking-wide transform transition-transform duration-500">
                    {/* {slide.title} */}
                  </h2>
                </div>
                
                {/* Main Heading */}
                <div className="overflow-hidden mb-2">
                  <h1 className="text-xl md:text-2xl text-white font-bold leading-tight transform transition-transform duration-500">
                    {slide.mainText}
                  </h1>
                </div>
                
                {/* Description */}
                <div className="overflow-hidden mb-3">
                  <p className="text-sm text-white/90 font-light leading-relaxed transform transition-transform duration-500 max-w-md">
                    {slide.description}
                  </p>
                </div>
                
                {/* Button */}
                <div className="transform transition-transform duration-500">
                  <button className="bg-emerald-500 text-white px-4 py-2 text-xs rounded hover:bg-emerald-600 transition-colors duration-300 font-medium tracking-wide">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons - Right side */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-2 z-20">
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default WelcomeCarousel;