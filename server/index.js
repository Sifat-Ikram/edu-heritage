import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Root route for testing
app.get("/", (req, res) => {
  res.send("API is working!");
});

// 404 fallback
app.use((req, res) => res.status(404).send("Route not found"));

const PORT = 4321;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
