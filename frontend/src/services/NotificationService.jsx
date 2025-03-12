import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api"; // Adjust according to your backend

// Fetch events
export const getEventByDate = async (date) => {
    const response = await axios.get(`${API_URL}/events/${date}`);
    return response.data;
  };
  
  export const getAllEvents = async () => {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;
  };

// Fetch notices
export const getNotices = async () => {
  const response = await axios.get(`${API_BASE_URL}/notices`);
  return response.data;
};

// Add notice (with file upload)
export const addNotice = async (formData) => {
  console.log(formData);
  const response = await axios.post(`${API_BASE_URL}/notices/add`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};