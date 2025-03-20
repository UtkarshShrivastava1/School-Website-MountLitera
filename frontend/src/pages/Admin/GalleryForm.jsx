import React, { useState, useEffect } from 'react';
import { Save, X, Upload, AlertCircle, CheckCircle } from 'lucide-react';
import api from '../../../utils/api';

const GalleryForm = ({ initialPost = {}, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    title: initialPost.title || '',
    content: initialPost.content || '',
    image: null
  });
  const [preview, setPreview] = useState(initialPost.image?.url || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [saveStatus, setSaveStatus] = useState(''); // 'success', 'error', or empty

  useEffect(() => {
    if (initialPost.image?.url) {
      setPreview(initialPost.image.url);
    }
  }, [initialPost]);

  // Function to reset the form
  const resetForm = () => {
    // If we're editing, keep the original values
    if (initialPost._id) {
      setFormData({
        title: initialPost.title || '',
        content: initialPost.content || '',
        image: null
      });
      setPreview(initialPost.image?.url || '');
    } else {
      // If creating new, clear all values
      setFormData({
        title: '',
        content: '',
        image: null
      });
      setPreview('');
    }
    setSaveStatus('');
    setError('');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset status messages when form is changed
    setSaveStatus('');
    setError('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
      // Reset status messages when form is changed
      setSaveStatus('');
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSaveStatus('');

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('content', formData.content);
      if (formData.image instanceof File) {
        data.append('image', formData.image);
      }

      console.log("Submitting form data:", {
        title: formData.title,
        content: formData.content,
        hasImage: formData.image instanceof File
      });

      if (initialPost._id) {
        const response = await api.updatePost(initialPost._id, data);
        console.log("Update response:", response);
      } else {
        const response = await api.createPost(data);
        console.log("Create response:", response);
        // Reset the form immediately for new posts to allow for another entry
        resetForm();
      }

      // Set success status
      setSaveStatus('success');
      
      // Wait a moment before calling onSuccess to show the success message
      setTimeout(() => {
        if (typeof onSuccess === 'function') {
          onSuccess();
        } else {
          console.warn("onSuccess is not a function or not provided");
        }
      }, 1500);
      
    } catch (err) {
      console.error("Form submission error:", err);
      setSaveStatus('error');
      setError(err.response?.data?.message || 'Failed to save post. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
        {initialPost._id ? 'Edit Gallery Post' : 'Create New Gallery Post'}
      </h2>

      {saveStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md flex items-center">
          <CheckCircle size={18} className="mr-2" />
          <span>{initialPost._id ? 'Post updated successfully!' : 'Post created successfully!'}</span>
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md flex items-center">
          <AlertCircle size={18} className="mr-2" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter post title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors h-36"
            placeholder="Enter post description"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex items-center justify-center">
              <input
                type="file"
                accept="image/*"
                id="image-upload"
                onChange={handleImageChange}
                className="hidden"
              />
              <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center justify-center w-full">
                <Upload size={24} className="text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">
                  {preview ? 'Change image' : 'Click to upload an image'}
                </span>
              </label>
            </div>
            {preview && (
              <div className="mt-4 flex justify-center">
                <img
                  src={preview}
                  alt="Preview"
                  className="max-h-64 rounded-md shadow-sm object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
         
          {!initialPost._id && (
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 flex items-center text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              disabled={loading}
            >
              <span>Reset</span>
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 flex items-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Saving...
              </>
            ) : (
              <>
                <Save size={18} className="mr-1" />
                Save Post
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GalleryForm;