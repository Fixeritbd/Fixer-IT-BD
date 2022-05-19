import React from "react";
import CountUp from "react-countup";

const StartupItem = ({ img, counterNumber, subheading }) => {
  return (
    <div className="startup-item">
      <img src={img} alt="img" />
      <h2>
        <CountUp end={counterNumber} duration={5} />+
      </h2>
      <h3>{subheading}</h3>
    </div>
  );
};

export default StartupItem;
