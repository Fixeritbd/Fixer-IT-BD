import React from "react";
import AboutPart from "../../components/About/AboutPart";
import Banner from "../../components/Banner/Banner";
import Featured from "../../components/Featured/Featured";
import Service from "../../components/Service/Service";
import Startup from "../../components/Startup/Startup";
import Testimonial from "../../components/Testimonial/Testimonial";
import VideoPart from "../../components/Video Part/Video";

function Home() {
  return (
    <div>
      <Banner />
      <AboutPart />
      <Service />
      <Featured />
      <Startup />
      <VideoPart />
      <Testimonial />
    </div>
  );
}

export default Home;
