import React from "react";
import AboutPart from "../../components/About/AboutPart";
import Banner from "../../components/Banner/Banner";
import Featured from "../../components/Featured/Featured";
import Service from "../../components/Service/Service";
import Video from "../../components/Video Part/Video";

function Home() {
  return (
    <div>
      <Banner />
      <AboutPart />
      <Service />
      <Featured />
      <Video/>
    </div>
  );
}

export default Home;
