const express = require('express');
const router = express.Router();
const multer = require('multer');
const addDisclosure= require("../controllers/disclosureController");


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

router.post("/addDisclosure", upload.single("file") ,addDisclosure);


module.exports = router;