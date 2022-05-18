import mongoose from "mongoose";

let bannerModel = mongoose.Schema({
    subHeading: { type: String, required: true },
    heading: { type: String, required: true },
    button: { type: String, required: true },
    img: { type: String, required: true },
})

let banner = mongoose.model("banner", bannerModel);
export default banner