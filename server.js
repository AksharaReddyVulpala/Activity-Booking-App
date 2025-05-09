import express from "express";
import connectDb from "./config/dbConnection.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./Routes/authRoutes.js";
import activityRoutes from "./Routes/activityRoutes.js";
import bookingRoutes from "./Routes/bookingRoutes.js";

dotenv.config();

const app = express();
// const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDb()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Hello from root route!");
});

app.use("/api/users", authRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/bookings", bookingRoutes);

export default app;
