import express from "express";
import startup from "../Model/Startup.js";

const startuprouter = express.Router();

startuprouter.post("/", async (req, res) => {
  let startupData = await new startup({
    img: req.body.img,
    couterNumber: req.body.couterNumber,
    subheading: req.body.subheading,
  });
  startupData.save();
  res.status(200).send({ msg: "Done" });
});

startuprouter.get("/", async (req, res) => {
  let data = await startup.find({});
  res.send(data);
});

export default startuprouter;
