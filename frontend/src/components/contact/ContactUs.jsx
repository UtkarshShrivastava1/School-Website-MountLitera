import React from 'react';

const LocationSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">Our Location</h1>
        <div className="h-1 w-16 bg-red-600 mb-8"></div>
        
        <div className="space-y-4 md:space-y-6 mb-8">
          <p className="text-xl md:text-3xl font-medium text-red-800">
          Mount Litera Zee School Bilaspur
          </p>
          
          <p className="text-base md:text-lg">
            You can find <span className="font-semibold">Mount Litera Zee School </span> 
 Uslapur, Bilaspur C.G., Bilaspur,
Pincode- 495001.
          </p>
          
          <p className="text-base md:text-lg">
            For directions, please contact <a href="tel:042173900" className="text-teal-600 hover:text-teal-700 font-medium">9406430027,9424130028</a> or please refer to the map below.
          </p>
        </div>
      </div>
      
      {/* Map container with responsive height */}
      <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg shadow-md overflow-hidden">
        {/* Placeholder for Google Maps iframe */}
        <div className="w-full h-full flex items-center justify-center">
          {/* <img 
            src="/api/placeholder/800/400" 
            alt="Map location of GEMS Al Khaleej International School"
            className="w-full h-full object-cover"
          /> */}
          {/* In a real implementation, you would replace this with: */}
           
          <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d41462.84320624708!2d82.13888371396226!3d22.098369066162103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a280d5707b8343d%3A0xb4ce01d89a86f6b9!2sMount%20Litera%20Zee%20School%20Bilaspur%20Uslapur%20Bilaspur%2C%20Chhattisgarh%20495001!3m2!1d22.1006911!2d82.11006359999999!5e0!3m2!1sen!2sin!4v1740726352171!5m2!1sen!2sin" 
            className="w-full h-[82vh] border-0" 
            allowFullScreen
            loading="lazy"
            title="GEMS Al Khaleej International School Map">
            </iframe>
         
          
        </div>
      </div>
    </div>
  );
};

export default LocationSection;