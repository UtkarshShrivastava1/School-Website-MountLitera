const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const authController = require('./controllers/authController');
const { protect } = require('./middleware/auth');
const cors = require("cors");
dotenv.config();

connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// console.log(process.env.PORT || 5000);

app.post('/api/auth/admin-login', authController.adminLogin);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});