import React, { useState } from 'react';
import { Bell, Calendar, User, Facebook, Instagram, Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // ... navItems array remains the same ...
  const navItems = [
    {
      name: "HOME",
      leftColumn:[] ,
      rightColumn:[]
    },
    {
      name: "ABOUT US",
      leftColumn: ["School History", "Mission & Vision", "Leadership", "Campus Tour"],
      rightColumn: ["Faculty Directory", "Board of Trustees", "Employment", "Contact Us"]
    },
    {
      name: "ADMISSIONS & AID",
      leftColumn: ["Apply Now", "Tuition & Fees", "Financial Aid", "Visit Campus"],
      rightColumn: ["Transfer Students", "International Students", "FAQs", "Meet Our Team"]
    },
    {
      name: "ACADEMICS",
      leftColumn: ["Curriculum Overview", "Departments", "College Counseling", "Library"],
      rightColumn: ["Technology", "Academic Support", "Summer Programs", "Global Studies"]
    },
    {
      name: "ARTS",
      leftColumn: ["Visual Arts", "Music Program", "Theatre", "Dance"],
      rightColumn: ["Art Gallery", "Performances", "Faculty", "Arts Calendar"]
    },
    {
      name: "ATHLETICS",
      leftColumn: [
        "Lakeside Athletics",
        "Athletics Philosophy",
        "Athletics News",
        "Athletics Calendar",
        "Facilities",
        "Strength & Sports Medicine"
      ],
      rightColumn: [
        "Staff",
        "Teams",
        "Lion Photo Library",
        "Lions Sideline Store",
        "Athletics Livestreams",
        "Middle School Athletics"
      ],
    },
    {
      name: "STUDENT EXPERIENCE",
      leftColumn: ["Student Life", "Clubs & Activities", "Residential Life", "Dining"],
      rightColumn: ["Health & Wellness", "Community Service", "Leadership", "Traditions"]
    },
    {
      name: "SUMMER",
      leftColumn: ["Summer Programs", "Sports Camps", "Academic Enrichment", "Arts Workshops"],
      rightColumn: ["Registration", "Staff", "FAQs", "Past Programs"]
    }
  ];

  return (
    <header className="w-full">
      {/* Top bar - maroon background */}
      <div className="bg-red-900 text-white py-3 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-3">
            <img 
              src={Logo} 
              alt="Mount Litera Logo" 
              className="w-15 h-15 rounded-full bg-white"
            />
             <div className="hidden md:block">
              <h1 className="text-2xl md:text-3xl font-serif">Mount Litera Zee School Bilaspur</h1>
              <p className="text-sm text-gray-200">CBSE Affiliation No :  3330519</p>
            </div>
          </div>

          {/* Right side buttons - visible on medium+ screens */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <div className="flex flex-col items-center">
              <Bell className="w-5 h-5" />
              <span className="text-xs mt-1">NEWS</span>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="w-5 h-5" />
              <span className="text-xs mt-1">CALENDAR</span>
            </div>
            <div className="flex flex-col items-center">
              <User className="w-5 h-5" />
              <span className="text-xs mt-1">ADMISSION</span>
            </div>
            <div className="flex items-center space-x-3">
              <Facebook className="w-5 h-5" />
              <Instagram className="w-5 h-5" />
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Main navigation - white background */}
      <nav className="bg-white shadow-md relative">
        <div className="container mx-auto px-4">
          {/* Desktop navigation links with mega-menu dropdowns */}
          <ul className="hidden md:flex justify-between items-center font-medium text-xs lg:text-sm">
            {navItems.map((item, index) => (
              <li 
                key={index}
                className="relative group"
              >
                <div 
                  className="py-4 px-2 lg:px-3 cursor-pointer whitespace-nowrap hover:text-red-900 transition-colors"
                >
                  {item.name}
                </div>
                
                {/* Mega menu dropdown */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-50 border-t border-gray-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 w-screen max-w-screen-md">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        {item.leftColumn.map((link, i) => (
                          <a key={i} href="#" className="block py-2 border-b border-gray-200 hover:text-red-900 transition-colors">
                            {link}
                          </a>
                        ))}
                      </div>
                      <div>
                        {item.rightColumn.map((link, i) => (
                          <a key={i} href="#" className="block py-2 border-b border-gray-200 hover:text-red-900 transition-colors">
                            {link}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
          {/* Mobile menu - slide down when open */}
          {isMenuOpen && (
            <div className="md:hidden pt-2 pb-4">
              {/* Mobile icons row */}
              <div className="flex justify-center space-x-8 py-4 border-b border-gray-200">
                <div className="flex flex-col items-center">
                  <Bell className="w-5 h-5" />
                  <span className="text-xs mt-1">NEWS</span>
                </div>
                <div className="flex flex-col items-center">
                  <Calendar className="w-5 h-5" />
                  <span className="text-xs mt-1">CALENDAR</span>
                </div>
                <div className="flex flex-col items-center">
                  <User className="w-5 h-5" />
                  <span className="text-xs mt-1">ADMISSION</span>
                </div>
              </div>
              
              {/* Social icons */}
              <div className="flex justify-center space-x-6 py-3 border-b border-gray-200">
                <Facebook className="w-5 h-5" />
                <Instagram className="w-5 h-5" />
              </div>
              
              {/* Mobile accordion navigation */}
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100">
                    <div 
                      className="py-3 px-4 flex justify-between items-center"
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                    >
                      <span>{item.name}</span>
                      <span>{activeDropdown === index ? '−' : '+'}</span>
                    </div>
                    
                    {activeDropdown === index && (
                      <div className="bg-gray-50 px-4 py-2">
                        {[...item.leftColumn, ...item.rightColumn].map((link, i) => (
                          <a 
                            key={i}
                            href="#" 
                            className="block py-2 text-gray-700 border-b border-gray-200 last:border-0"
                          >
                            {link}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;