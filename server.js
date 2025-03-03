const express = require("express");
const cors = require("cors");
require("dotenv").config();

// import Firebase
const { db, auth } = require("./firebaseConfig");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

