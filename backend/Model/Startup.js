import mongoose from "mongoose";

const startupSchema = mongoose.Schema({
  img: { type: String, required: true },
  couterNumber: { type: Number, required: true },
  subheading: { type: String, required: true },
});

let startup = mongoose.model("startup", startupSchema);

export default startup;
