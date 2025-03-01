import React from 'react';
import { FaBus } from 'react-icons/fa';
import TransportImage from '../../assets/transport.jpg'; // Ensure the correct path

export default function SchoolTransport() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="max-w-5xl w-full bg-white p-10 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          School Transport Facility
        </h1>
        <p className="text-gray-700 text-lg text-center mb-8">
          At <span className="font-bold">Mount Litera Zee School, Bilaspur</span>, we provide a safe and efficient transport system for our students. Our fleet of well-maintained buses ensures comfortable and secure travel to and from school.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Transport Guidelines
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>All students must arrive at the designated pick-up points on time.</li>
            <li>Students should remain seated while the bus is in motion.</li>
            <li>Respect and follow the instructions of the bus driver and attendant.</li>
            <li>Maintain discipline and ensure the safety of fellow passengers.</li>
            <li>Any issues or concerns should be reported to the school administration.</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img 
            src={TransportImage}
            alt="School Bus" 
            className="rounded-lg shadow-lg w-full max-w-3xl"
          />
        </div>
      </div>
    </div>
  );
}