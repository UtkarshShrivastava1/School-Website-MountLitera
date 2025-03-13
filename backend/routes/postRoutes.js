const express = require('express');
const router = express.Router();
const { protect, isAdmin } = require('../middlewares/auth');
const upload = require('../middlewares/uploadMiddleware');
const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getPostById 
} = require('../controllers/postController');

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Post routes working' });
});

// Public routes - anyone can view posts
router.get('/', getAllPosts);        
router.get('/:id', getPostById);    

// Admin-only routes - protected with authentication and admin check
router.post('/', protect, isAdmin, upload, createPost);       
router.put('/:id', protect, isAdmin, upload, updatePost);     
router.delete('/:id', protect, isAdmin, deletePost);          

module.exports = router;