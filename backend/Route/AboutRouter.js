import express from "express";
import About from "../Model/About.js";

const aboutRouter = express.Router();

aboutRouter.post("/", async (req, res) => {
  const aboutData = await new About({
    subheading: req.body.subheading,
    heading: req.body.heading,
    para1: req.body.para1,
    para2: req.body.para2,
    btn: req.body.btn,
    img: req.body.img,
  });

  const data = aboutData.save();
  res.status(201).send({ msg: "complete", data });
});

aboutRouter.get("/", async (req, res) => {
  const data = await About.find({});
  res.send(data);
});

export default aboutRouter;
