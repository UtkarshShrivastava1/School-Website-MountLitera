const multer = require('multer');

// Use memory storage but with safeguards
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  // Check file existence
  if (!file) {
    return cb(new Error('No file uploaded'), false);
  }
  
  // Allow only specific image types to prevent malicious file uploads
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Only JPEG, PNG, GIF, and WebP images are allowed'), false);
  }

  cb(null, true);
};

// Create the multer upload instance with stricter limits
const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB - reduced from 5MB to prevent memory issues
    files: 1
  },
  fileFilter
}).single('image');

// Enhanced middleware with better error handling
const uploadMiddleware = (req, res, next) => {
  // Add a timeout to prevent hanging
  const uploadTimeout = setTimeout(() => {
    return res.status(408).json({
      success: false,
      message: 'Upload timed out. Please try again with a smaller file.'
    });
  }, 15000); // 15 seconds timeout
  
  upload(req, res, function(err) {
    // Clear timeout as upload completed (success or error)
    clearTimeout(uploadTimeout);
    
    // Log minimal details for debugging
    console.log('Upload request received:', {
      method: req.method,
      path: req.path,
      fileSize: req.file ? req.file.size : 'No file',
      contentType: req.headers['content-type'] || 'Not specified'
    });

    if (err instanceof multer.MulterError) {
      // Handle multer-specific errors
      console.error('Multer error:', err);
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          success: false,
          message: 'File too large. Maximum size is 2MB.'
        });
      }
      return res.status(400).json({
        success: false,
        message: `Upload error: ${err.message}`
      });
    } else if (err) {
      // Handle other errors
      console.error('Upload error:', err);
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }

    // Processing successful, continue
    next();
  });
};

module.exports = uploadMiddleware;