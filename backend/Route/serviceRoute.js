import Service from "../Model/Service.js";
import express from "express";

const serviceRoute = express.Router();

serviceRoute.post("/", async (req, res) => {
  const dataDeatils = new Service({
    icon: req.body.icon,
    title: req.body.title,
    para: req.body.para,
    btn: req.body.btn,
  });

  const ami = await dataDeatils.save();
  res.status(201).send({ msg: "This is complete", ami });
});

serviceRoute.get("/", async function (req, res) {
  const data = await Service.find({});
  res.send(data);
});

export default serviceRoute;
