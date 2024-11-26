const express = require("express");
const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const { createSuperuser } = require("./lib/superuserUtility");
require("dotenv").config();

const app = express();

connectDB();
createSuperuser();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Role-based Auth API");
});
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
