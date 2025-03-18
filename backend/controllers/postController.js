const Post = require('../models/Post');
const cloudinary = require('../config/cloudinary');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort('-createdAt');
    res.status(200).json({
      success: true,
      data: posts
    });
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching posts'
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    res.status(200).json({
      success: true,
      data: post
    });
  } catch (error) {
    console.error('Error in getPostById:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching post'
    });
  }
};

const createPost = async (req, res) => {
  try {
    console.log('Create post request received');
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title and content'
      });
    }

    let imageData = null;

    if (req.file) {
      try {
        console.log('Processing image upload...');
        // Use a stream-based approach rather than loading entire file into memory
        // Or use chunked upload if file is potentially large
        
        // Convert buffer to base64 in chunks if needed for larger files
        const fileStr = req.file.buffer.toString('base64');
        const fileType = req.file.mimetype;
        
        console.log('Attempting Cloudinary upload...');
        // Set a reasonable timeout for the upload
        const uploadResponse = await Promise.race([
          cloudinary.uploader.upload(
            `data:${fileType};base64,${fileStr}`,
            {
              resource_type: 'auto',
              folder: 'post_images'
            }
          ),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Upload timeout')), 30000)
          )
        ]);

        console.log('Cloudinary upload successful:', uploadResponse.public_id);
        imageData = {
          public_id: uploadResponse.public_id,
          url: uploadResponse.secure_url
        };
      } catch (uploadError) {
        console.error('Cloudinary upload error:', uploadError);
        return res.status(500).json({
          success: false,
          message: 'Error uploading image to Cloudinary',
          error: uploadError.message
        });
      }
    }

    const post = await Post.create({
      title,
      content,
      image: imageData
    });

    res.status(201).json({
      success: true,
      data: post
    });
  } catch (error) {
    console.error('Error in createPost:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error creating post'
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    const updateData = { ...req.body };

    if (req.file) {
      try {
        // Delete old image if it exists
        if (post.image && post.image.public_id) {
          await cloudinary.uploader.destroy(post.image.public_id);
        }

        const fileStr = req.file.buffer.toString('base64');
        const fileType = req.file.mimetype;
        
        const uploadResponse = await cloudinary.uploader.upload(
          `data:${fileType};base64,${fileStr}`,
          {
            resource_type: 'auto',
            folder: 'post_images'
          }
        );

        updateData.image = {
          public_id: uploadResponse.public_id,
          url: uploadResponse.secure_url
        };
      } catch (uploadError) {
        console.error('Image update error:', uploadError);
        return res.status(500).json({
          success: false,
          message: 'Error updating image',
          error: uploadError.message
        });
      }
    }

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: updatedPost
    });
  } catch (error) {
    console.error('Error in updatePost:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating post'
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    // Delete image from Cloudinary if it exists
    if (post.image && post.image.public_id) {
      try {
        await cloudinary.uploader.destroy(post.image.public_id);
      } catch (deleteError) {
        console.error('Error deleting image from Cloudinary:', deleteError);
        // Continue with post deletion even if image deletion fails
      }
    }

    await post.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Post deleted successfully'
    });
  } catch (error) {
    console.error('Error in deletePost:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting post'
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};