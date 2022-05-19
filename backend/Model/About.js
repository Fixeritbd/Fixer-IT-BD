import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
  subheading: { type: String },
  heading: { type: String },
  para1: { type: String },
  para2: { type: String },
  btn: { type: String },
  img: { type: String },
});

let About = mongoose.model("about", aboutSchema);

export default About;
