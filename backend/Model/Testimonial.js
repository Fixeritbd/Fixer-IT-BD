import mongoose from "mongoose";

let testimonialSchema = mongoose.Schema({
  name: { type: String, required: true },
  itemImg: { type: String, required: true },
  manImg: { type: String, required: true },
  para: { type: String, required: true },
  designation: { type: String, required: true },
});

let Testimonial = mongoose.model("testimonial", testimonialSchema);

export default Testimonial;
