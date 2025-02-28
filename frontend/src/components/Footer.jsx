import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../assets/Logo.jpg'

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-10">
        {/* Top Section with Logo */}
        {/* <div className="flex justify-center mb-8">
          <div className="w-64">
            <img 
              src=""
              alt="Al Khaleej International School Logo" 
              className="w-full"
            />
          </div>
        </div> */}

        {/* Main Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Get Connected Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-red-900 font-semibold mb-4 pb-2 border-b-2 border-blue-900 inline-block">Get Connected</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-900">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-blue-900">
                <Instagram size={24} />
              </a>
            </div>

            <div className="mt-8">
              <img 
                src={Logo}
                alt="GEMS Education Logo" 
                className="w-20 "
              />
              <p className="text-sm mt-2">
                We see <span className="font-semibold">genius</span> in every child
              </p>
            </div>
          </div>

          {/* Our School Section */}
          <div className="flex flex-col">
            <h3 className="text-red-900 font-semibold mb-4 pb-2 border-b-2 border-blue-900 inline-block">Our School</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-700">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700">Facilities and Campus</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700">Our Location</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700">School Transportation</a></li>
            </ul>
          </div>

          {/* Admissions Section */}
          <div className="flex flex-col">
            <h3 className="text-red-900 font-semibold mb-4 pb-2 border-b-2 border-blue-900 inline-block">Admissions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-700">Virtual Admissions Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700">Fees and Payments</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700">Book a tour</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700">Enroll Online</a></li>
            </ul>
          </div>

          {/* Explore More Section */}
          <div className="flex flex-col">
            <h3 className="text-red-900 font-semibold mb-4 pb-2 border-b-2 border-blue-900 inline-block">Explore More</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-700">Learning Overview</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700">Extra Curricular Activities</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700">Academic Calendar</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700">Zajel Newsletter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700">GEMS Rewards Program</a></li>
            </ul>
          </div>

          {/* School Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-red-900 font-semibold mb-4 pb-2 border-b-2 border-blue-900 inline-block">Mount Litera Zee School</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-blue-700 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Mount Litera Zee School 
Uslapur, Bilaspur C.G., 
Pincode- 495001.</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-blue-700 mr-2 flex-shrink-0" size={20} />
                <a href="mailto:info_akn@gemsedu.com" className="text-gray-600 hover:text-blue-700">Mlzs.bilaspur@mountlitera.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="text-blue-700 mr-2 flex-shrink-0" size={20} />
                <a href="tel:+97142173900" className="text-gray-600 hover:text-blue-700">9406430027</a>
              </li>
              <li className="flex items-center">
                <Phone className="text-blue-700 mr-2 flex-shrink-0" size={20} />
                <a href="tel:+97142173900" className="text-gray-600 hover:text-blue-700">9424130028</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Policy Links */}
        <div className="border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-between text-sm">
          <div className="flex gap-4 mb-2 sm:mb-0">
            <a href="#" className="text-gray-600 hover:text-blue-700">Privacy Policy</a>
            <span className="text-gray-400">•</span>
            <a href="#" className="text-gray-600 hover:text-blue-700">Terms & Conditions</a>
          </div>
          <div className="text-gray-500">
            Copyright © 2024 All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;