import axios from 'axios';

const baseURL = 'http://localhost:5000/api';

const authApi = axios.create({ baseURL });
const publicApi = axios.create({ baseURL });

authApi.interceptors.request.use(config => {
  const adminToken = localStorage.getItem('adminToken');
  if (adminToken) {
    config.headers.Authorization = `Bearer ${adminToken}`;
  }
  return config;
});

// Admin endpoints
const createPost = (postData) => authApi.post('/posts', postData);
const updatePost = (postId, postData) => authApi.put(`/posts/${postId}`, postData);
const deletePost = (postId) => authApi.delete(`/posts/${postId}`);

// Public endpoints
const getPosts = () => publicApi.get('/posts');
const getPostById = (postId) => publicApi.get(`/posts/${postId}`);

export default {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getPostById,
};