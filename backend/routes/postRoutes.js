const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const Post = require('../models/Post');
const multer = require('multer');
const cloudinary = require('../utils/cloudinary');

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Public route - Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Protected routes
router.post('/', protect, upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.buffer.toString('base64'), {
      folder: 'school-gallery'
    });

    const newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      image: {
        public_id: result.public_id,
        url: result.secure_url
      }
    });

    const post = await newPost.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', protect, upload.single('image'), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    let image = post.image;
    
    if (req.file) {
      // Delete old image
      await cloudinary.uploader.destroy(post.image.public_id);
      
      // Upload new image
      const result = await cloudinary.uploader.upload(req.file.buffer.toString('base64'), {
        folder: 'school-gallery'
      });
      
      image = {
        public_id: result.public_id,
        url: result.secure_url
      };
    }

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title || post.title,
        description: req.body.description || post.description,
        image
      },
      { new: true }
    );

    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    // Delete image from Cloudinary
    await cloudinary.uploader.destroy(post.image.public_id);
    
    await post.remove();
    res.json({ message: 'Post removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;