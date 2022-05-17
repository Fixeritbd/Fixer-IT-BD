import mongoose from "mongoose";

const services = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  para: {
    type: String,
  },
  btn: {
    type: String,
  },
});

const Service = mongoose.model("services", services);

export default Service;
