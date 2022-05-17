import React from "react";

const ServiceItem = ({ title, icon, para, btn }) => {
  return (
    <div className="service-item">
      <div className="service-top">
        <img src={icon} alt="serviceicon-1" />
        <h2>{title}</h2>
      </div>
      <div className="service-bottom">
        <p>{para}</p>
        <p className="btn">{btn}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
