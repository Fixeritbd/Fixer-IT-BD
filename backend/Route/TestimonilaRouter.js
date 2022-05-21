import express from "express";
import Testimonial from "../Model/Testimonial.js";

const testimonialRoter = express.Router();

testimonialRoter.post("/", async (req, res) => {
  let testimonialData = await new Testimonial({
    name: req.body.name,
    itemImg: req.body.itemImg,
    manImg: req.body.manImg,
    para: req.body.para,
    designation: req.body.designation,
  });

  let testimonial = testimonialData;
  testimonial.save();
  res.status(200).send({ msg: "Complete", testimonial });
});

testimonialRoter.get("/", async (req, res) => {
  let data = await Testimonial.find({});
  res.send(data);
});

export default testimonialRoter;
