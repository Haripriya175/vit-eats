import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: String,
    location: String,
    isOpen: Boolean
});

export default mongoose.model("Restaurant", restaurantSchema);
