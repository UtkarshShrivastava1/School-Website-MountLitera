import { useState } from "react";
import { addNotice } from "../../services/NotificationService";

const NoticeForm = ({ refreshNotices }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
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
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("date", formData.date);
    if (file) data.append("file", file);

    try {
      await addNotice(data);
      setMessage("Notice added successfully!");
      setFormData({ title: "", description: "", date: "" });
      setFile(null);

      // Reset file input field
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";

      // Check if refreshNotices function exists before calling
    if (typeof refreshNotices === "function") {
      refreshNotices();
    }
  } catch (error) {
    console.error("Error adding notice:", error);
    const errorMsg = error.response?.data?.error || error.message || "Unknown error";
    setMessage(`Failed to add notice: ${errorMsg}`);
  }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-[50%] mx-auto mt-3">
      <h2 className="text-xl font-semibold mb-4">Add Notice</h2>
      {message && <p className="text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Notice</button>
      </form>
    </div>
  );
};

export default NoticeForm;
