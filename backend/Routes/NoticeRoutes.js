const express = require("express");
const router = express.Router();
const multer = require("multer");
const Notice = require("../models/Notice");

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store files in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Add a notice with file upload
router.post("/add", upload.single("file"), async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newNotice = new Notice({ title, description, date, fileUrl });
    await newNotice.save();
    res.status(201).json({ message: "Notice added successfully", notice: newNotice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all notices
router.get("/", async (req, res) => {
  try {
    const notices = await Notice.find().sort({ date: -1 });
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
