import mongoose from "mongoose";

let featuredModel = mongoose.Schema({
    subHeading: { type: String, required: true },
    heading: { type: String, required: true },
    para1: { type: String, required: true },
    para2: { type: String, required: true },
    button: { type: String, required: true },
    img: { type: String, required: true }
})

let featured = mongoose.model("featured", featuredModel)
export default featured