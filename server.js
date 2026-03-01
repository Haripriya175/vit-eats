import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/restaurants", restaurantRoutes);

try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
} catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    console.error("TIP: Please verify your MongoDB Atlas IP Whitelist (allow access from anywhere 0.0.0.0/0 for testing).");
    process.exit(1);
}

app.get("/", (req, res) => {
    res.send("VIT-Eats API Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});