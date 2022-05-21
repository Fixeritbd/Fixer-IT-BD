import React from "react";

const TesItem = ({ designation, name, manImg, itemImg, para }) => {
  return (
    <div className="testi-item">
      <div className="item-img">
        <img src={itemImg} alt="item img" />
      </div>
      <div className="para">
        <p>{para}</p>
      </div>
      <div className="testi-item-bottom">
        <img src={manImg} alt="man-img" />
        <div className="testi-item-bottom-content">
          <h4>{name}</h4>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TesItem;
