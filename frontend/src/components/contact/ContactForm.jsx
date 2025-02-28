import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="mb-6">
            <button className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              Get In Touch
            </button>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Have Questions?</h1>
          
          <p className="text-gray-600 mb-8">
            Our HR team is here to help you with any questions about careers at Horizon Academy.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Human Resources Department</h3>
                <p className="text-gray-600"> Mount Litera Zee School</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Mount Litera Zee School</h3>
                <p className="text-gray-600"> Uslapur, Bilaspur C.G., Bilaspur,
                Pincode- 495001.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Mlzs.bilaspur@mountlitera.com</h3>
                <p className="text-gray-600">9406430027,9424130028</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Contact Form */}
        <div className="lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">Fill out the form below and our HR team will get back to you.</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
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
            className="w-full h-full border-0" 
            allowFullScreen
            loading="lazy"
            title="GEMS Al Khaleej International School Map">
            </iframe>
         
          
        </div>
      </div>
    </div>
  );
};

export default ContactPage;