import React from "react";
import AboutPart from "../../components/About/AboutPart";
import Banner from "../../components/Banner/Banner";
import Blog from "../../components/Blog/Blog";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";
import Pricing from "../../components/Pricing/Pricing";
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
      <Blog />
      <Pricing />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
