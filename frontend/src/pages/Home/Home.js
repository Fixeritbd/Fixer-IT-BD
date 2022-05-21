import React from "react";
import AboutPart from "../../components/About/AboutPart";
import Banner from "../../components/Banner/Banner";
import Featured from "../../components/Featured/Featured";
import Pricing from "../../components/Pricing/Pricing";
import Service from "../../components/Service/Service";
import Startup from "../../components/Startup/Startup";
import VideoPart from "../../components/Video Part/Video"

function Home() {
  return (
    <div>
      <Banner />
      <AboutPart />
      <Service />
      <Featured />
      <Startup />
      <VideoPart />
      <Pricing />
    </div>
  );
}

export default Home;
