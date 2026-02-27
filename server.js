const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
});

app.get("/", (req, res) => {
    res.send("VIT-Eats API Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});