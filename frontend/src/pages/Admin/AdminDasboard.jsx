import React, { useState } from 'react'
import { LogOut} from "lucide-react"
import EventForm from './NoticeForm';
import Logo from '../../assets/logo.jpg';
import { Menu, X, Calendar, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NoticeForm from './NoticeForm';



function AdminDasboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };
    const [activeItem, setActiveItem] = useState("events");
  
  const menuItems = ["events", "notice", "gallery"];

    const handlelogout =()=>{
        localStorage.clear();
        window.location.href = "/";
    }
  return (
    <>
    <div className="bg-red-900 text-white py-3 px-4 md:px-8">
            <div className="container mx-auto flex justify-between items-center">
              {/* Logo and Title */}
              <div className="flex items-center space-x-3">
                <img src={Logo} alt="School Logo" className="w-15 h-full rounded-full bg-white" />
                <div className="hidden md:block">
                  <h1 className="text-2xl md:text-3xl font-serif">Mount Litera Zee School Bilaspur</h1>
                  <p className="text-sm text-gray-200">CBSE Affiliation No: 3330519</p>
                </div>
              </div>
              
              {/* Mobile Title - Shown only on smallest screens */}
              <div className="md:hidden text-center absolute left-1/2 transform -translate-x-1/2">
                <h1 className="text-xl font-serif">Mount Litera Zee School Bilaspur</h1>
                <p className="text-xs text-gray-200">CBSE Affiliation No: 3330519</p>
              </div>
    
              {/* Right Side Menu */}
              <div className="flex items-center space-x-4">
                {/* Quick Access Icons - Desktop */}
                <div className="hidden md:flex items-center space-x-6">
                  {/* News Icon */}
                  <div className="flex flex-col items-center cursor-pointer">
                    <Bell className="h-5 w-5 text-yellow-200" />
                    <span className="text-xs text-yellow-200 mt-1">NEWS</span>
                  </div>
                  
                  {/* Calendar Icon */}
                  <div className="flex flex-col items-center cursor-pointer">
                    <Calendar className="h-5 w-5 text-yellow-200" />
                    <span className="text-xs text-yellow-200 mt-1">CALENDAR</span>
                  </div>
                  
                  {/* Directory Icon */}
                  <div className="flex flex-col items-center cursor-pointer">
                    <User className="h-5 w-5 text-yellow-200" />
                    <span className="text-xs text-yellow-200 mt-1">ADMISSION</span>
                  </div>
                </div>
                
                {/* Mobile Menu Toggle */}
                <div className="md:hidden cursor-pointer">
                  <button 
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center p-2 rounded-md text-yellow-200 hover:text-yellow-100 focus:outline-none"
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        <nav className='min-h-[10vh] flex items-center justify-between px-10 '>
            <h1 className='text-4xl  font-serif'>Admin Dashboard</h1>
            <div onClick={handlelogout} className="cursor-pointer flex items-center flex-col">
                <LogOut className="h-5 w-5 text-yellow-600" />
                <span className="text-xs text-yellow-600 mt-1">LogOut</span>
              </div>
        </nav>
       <section className='flex'>
       <aside className='w-[20%] h-[80vh] bg-red-900 rounded-md py-4'>
        <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setActiveItem(item)}
            className={`font-serif cursor-pointer p-2 rounded-md text-center capitalize text-xl text-white ${
              activeItem === item ? " underline text-white" : "text-decoration-none"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
        </aside>
        <div className='w-[80%] min-h-[80vh]'>
            {activeItem=== "notice" && <NoticeForm/>}
        </div>
       </section>
    </>
  )
}

export default AdminDasboard