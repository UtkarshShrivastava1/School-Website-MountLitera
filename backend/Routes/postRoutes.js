const express = require('express');
const router = express.Router();
const { protect, isAdmin } = require('../middleware/auth');
const uploadMiddleware = require('../middleware/upload');
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postController');

// Debugging: Verify middleware and controller imports
console.log('[DEBUG] Middleware check:', {
  protect: typeof protect,
  isAdmin: typeof isAdmin,
  uploadMiddleware: typeof uploadMiddleware
});

console.log('[DEBUG] Controller check:', {
  createPost: typeof createPost
});

// Admin routes
router.post(
  '/',
  protect,
  isAdmin,
  uploadMiddleware,
  createPost
);

// ... rest of your routes ...

module.exports = router;