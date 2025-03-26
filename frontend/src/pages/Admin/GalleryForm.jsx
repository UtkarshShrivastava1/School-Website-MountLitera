// import React, { useState } from 'react'

// function GalleryForm({ onSubmit, initialValues = {} }) {
//     const [formData, setFormData] = useState({
//         title: initialValues.title || '',
//         content: initialValues.content || '',
//         image: null
//       });
//       const [previewUrl, setPreviewUrl] = useState(initialValues.image?.url || '');
//       const [loading, setLoading] = useState(false);

//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//           ...prev,
//           [name]: value
//         }));
//       };

//       const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//           setFormData(prev => ({
//             ...prev,
//             image: file
//           }));

//           // Create preview URL
//           const reader = new FileReader();
//           reader.onloadend = () => {
//             setPreviewUrl(reader.result);
//           };
//           reader.readAsDataURL(file);
//         }
//       };

//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//           // Create FormData object to handle file upload
//           const postData = new FormData();
//           postData.append('title', formData.title);
//           postData.append('content', formData.content);
//           if (formData.image) {
//             postData.append('image', formData.image);
//           }

//           await onSubmit(postData);

//           // Reset form after successful submission
//           setFormData({
//             title: '',
//             content: '',
//             image: null
//           });
//           setPreviewUrl('');
//         } catch (error) {
//           console.error('Error submitting post:', error);
//         } finally {
//           setLoading(false);
//         }
//       };
//   return (
//     <>
//          <div className="max-w-lg mx-auto my-8">
//       <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Post</h2>

//         <div className="mb-4">
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter post title"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
//             Content
//           </label>
//           <textarea
//             id="content"
//             name="content"
//             value={formData.content}
//             onChange={handleChange}
//             required
//             rows="6"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Write your post content here..."
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
//             Image
//           </label>
//           <input
//             type="file"
//             id="image"
//             name="image"
//             onChange={handleImageChange}
//             accept="image/*"
//             className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//           />

//           {previewUrl && (
//             <div className="mt-2">
//               <p className="text-sm text-gray-500 mb-1">Preview:</p>
//               <div className="relative w-full h-40 bg-gray-100 rounded-md overflow-hidden">
//                 <img
//                   src={previewUrl}
//                   alt="Preview"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-2 px-4 rounded-md text-white font-medium
//             ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
//             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors`}
//         >
//           {loading ? 'Submitting...' : 'Submit Post'}
//         </button>
//       </form>
//     </div>
//     </>
//   )
// }

// export default GalleryForm

// GalleryForm.jsx
import React, { useState } from "react";

function GalleryForm({ onSubmit = () => {}, initialValues = {} }) {
  const [formData, setFormData] = useState({
    title: initialValues.title || "",
    content: initialValues.content || "",
    image: null,
  });
  const [previewUrl, setPreviewUrl] = useState(initialValues.image?.url || "");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("adminToken"); // Get JWT Token
      if (!token) {
        alert("Unauthorized! Please login first.");
        return;
      }

      const postData = new FormData();
      postData.append("title", formData.title);
      postData.append("content", formData.content);
      if (formData.image) {
        postData.append("image", formData.image);
      }

      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: postData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit");
      }

      alert("Form submitted successfully!");
      setFormData({
        title: "",
        content: "",
        image: null,
      });
      setPreviewUrl("");
    } catch (error) {
      console.error("Error submitting post:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
          Create New Post
        </h2>
        <hr className='text-gray-400 mb-2'/>


        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter post title"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your post content here..."
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full border rounded-md p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />

          {previewUrl && (
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-1">Preview:</p>
              <div className="relative w-full h-40 bg-gray-100 rounded-md overflow-hidden">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="font-bold px-4 bg-[#f25811] text-white py-2 rounded-lg hover:bg-[rgb(242,88,17)] transition-all ease-in-out cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default GalleryForm;