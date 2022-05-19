import express from "express";
import "dotenv/config";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import bannerData from "./bannerData.js";
import logoData from "./logoData.js";
import serviceRoute from "./Route/serviceRoute.js";
import aboutRouter from "./Route/AboutRouter.js";
import bannerRouter from "./Route/BannerRouter.js";
import featuredRouter from "./Route/featuredRouter.js";
import startuprouter from "./Route/StartupRouter.js";

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/service", serviceRoute);
app.use("/about", aboutRouter);
app.use("/banner", bannerRouter);
app.use("/startup", startuprouter);
app.use("/featured", featuredRouter);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/logo", function (req, res) {
  res.send(logoData);
});

app.get("/banner", function (req, res) {
  res.send(bannerData);
});

app.listen(8000, () => {
  console.log("i am from port 8000");
});
