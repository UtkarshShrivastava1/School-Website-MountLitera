import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HolidayForm() {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 

    try {
      await axios.post("http://localhost:5000/api/leaves/apply", { title, description, date });
      setMessage("Holiday added successfully!");
      setTitle("");
      setDescription("");
      setDate("");
    } catch (error) {
      setMessage("Error creating event.");
      console.error("Error:", error);
    }
  };
  return (
    <>
        <div className="flex flex-col items-center p-6 ">
      {/* <button 
        onClick={() => navigate("/")} 
        className="self-end mb-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
      >
        Back to Calendar
      </button> */}
      
      <h2 className="text-2xl font-bold mb-4">Add A Holiday</h2>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-96">
        <label className="block mb-2">Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="w-full border p-2 rounded mb-3"
          required
        />

        <label className="block mb-2">Description:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="w-full border p-2 rounded mb-3"
          required
        />

        <label className="block mb-2">Date:</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          className="w-full border p-2 rounded mb-3"
          required
        />

        <button type="submit" className="font-bold px-4 bg-[#f25811] text-white py-2 rounded-lg hover:bg-[rgb(242,88,17)] transition-all ease-in-out cursor-pointer">
          Add
        </button>
        
        {message && <p className="mt-3 text-center text-gray-700">{message}</p>}
      </form>
    </div>
    </>
  )
}

export default HolidayForm