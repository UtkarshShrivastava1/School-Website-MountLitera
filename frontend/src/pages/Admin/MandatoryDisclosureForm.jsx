import { useState } from "react";
// import { addNotice } from "../../services/NotificationService";
import { addDisclosure } from "../../services/DisclosureService";

const MandatoryDisclosureForm = ({ refreshNotices }) => {
  const [formData, setFormData] = useState({
    type:"",
    title: "",
    description: "",
    // date: "",
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("type", formData.type);
    data.append("title", formData.title);
    data.append("description", formData.description);
    // data.append("date", formData.date);
    if (file) data.append("file", file);

    console.log(data.type);

    try {
      await addDisclosure(data);
      setMessage("Disclosure added successfully!");
      setFormData({ title: "", description: "", date: "" });
      setFile(null);

      // Reset file input field
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";

//       // Check if refreshNotices function exists before calling
//     if (typeof refreshNotices === "function") {
//       refreshNotices();
//     }
  } catch (error) {
    console.error("Error adding notice:", error);
    const errorMsg = error.response?.data?.error || error.message || "Unknown error";
    setMessage(`Failed to add notice: ${errorMsg}`);
  }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-[50%] mx-auto mt-3">
      <h2 className="text-xl font-bold mb-4 text-center">Create Mandatory Disclosure</h2>
      {message && <p className="text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" required />
        {/* <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required /> */}
        {/* <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded" /> */}
        <div className="mb-6">
          {/* <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            File:
          </label> */}
          <input
            type="file"
            onChange={handleFileChange}
            // accept="image/*"
            className="w-full border rounded p-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        {/* <button type="submit" className="bg-[#191f5d] text-white px-4 py-2 rounded transition-all ease-in-out cursor-pointer">Add Notice</button> */}

        <button type="submit" className="font-bold px-4 bg-[#f25811] text-white py-2 rounded-lg hover:bg-[rgb(242,88,17)] transition-all ease-in-out cursor-pointer">
          Add Mandatory Disclosure
        </button>
      </form>
    </div>
  );
};

export default MandatoryDisclosureForm;
