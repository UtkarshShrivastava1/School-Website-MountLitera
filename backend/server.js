require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
const leaveRoutes = require("./Routes/LeaveRoutes");
const eventRoutes = require("./Routes/EventRoutes");
const detailsRoutes = require("./Routes/DetailsRoutes");
const noticeRoutes = require("./Routes/NoticeRoutes");
const authRoutes = require("./Routes/AuthRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/events", eventRoutes);
app.use("/details", detailsRoutes);
app.use("/api/leaves", leaveRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));



connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
