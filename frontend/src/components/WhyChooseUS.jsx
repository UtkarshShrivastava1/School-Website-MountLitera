import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaLaptopCode, FaUserGraduate, FaSchool, FaUsers, FaChartLine, FaGlobe } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";


const sections = [
  { title: "Unique Skills Programme", content: "Students engage in music, dance, theatre, and arts, guided by professionals.", icon: <FaChalkboardTeacher /> },
  { title: "Technology Enabled Learning", content: "Smart classes with AV content and interactive learning.", icon: <FaLaptopCode /> },
  { title: "Emerging Student Profile (ESP)", content: "Developing knowledge, life skills, and values.", icon: <FaUserGraduate /> },
  { title: "Litera Octave", content: "A holistic model integrating all elements of school engagement.", icon: <FaSchool /> },
  { title: "Well-Trained Teachers", content: "Continuous training ensures best-in-class education.", icon: <FaUsers /> },
  { title: "Assessments & Parents", content: "Continuous assessments and parent involvement.", icon: <FaChartLine /> },
  { title: "Community & Social Awareness", content: "Students work towards a sustainable society.", icon: <FaGlobe /> }
];

export default function WhyChooseUs() {
  return (
    <div className="bg-white max-h-screen p-10 flex flex-col items-center text-black">
    <h1 className="text-4xl font-bold mb-10">Why Choose Us?</h1>

       {/* Timeline Design */}
       <div className="relative w-full max-w-4xl mb-20">
        <div className="border-l-4 border-blue-500 absolute h-full left-10 top-0"></div>
        {sections.map((section, index) => (
          <div key={index} className="relative ml-16 mb-10">
            <div className="absolute left-[-50px] top-2 w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg">
              {section.icon}
            </div>
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="text-gray-300 mt-2">{section.content}</p>
          </div>
        ))}
      </div>

    </div>
  );
}



