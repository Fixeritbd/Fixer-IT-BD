import React from "react";
import AboutPart from "../../components/About/AboutPart";
import Banner from "../../components/Banner/Banner";
import Featured from "../../components/Featured/Featured";
import Service from "../../components/Service/Service";

function Home() {
  return (
    <div>
      <Banner />
      <AboutPart />
      <Service />
      <Featured />
    </div>
  );
}

export default Home;
