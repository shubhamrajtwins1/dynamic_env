import express from "express";
import dotenv from "dotenv";
import path from "path";

// Detect environment
const NODE_ENV = process.env.NODE_ENV || "development";

// Load env file dynamically
dotenv.config({
  path: path.resolve(process.cwd(), `.env.${NODE_ENV}`),
});

const app = express();

// Middleware
app.use(express.json());

// Example Route
app.get("/", (req, res) => {
  res.json({
    message: "Server is running 🚀",
    env: NODE_ENV,
    dbHost: process.env.DB_HOST,
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running in ${NODE_ENV} mode on port ${PORT}`);
});
