/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv3TopText.css";
import Arrow from "../../../../assets/Arrow.svg";
import Arrow1 from "../../../../assets/Arrow1.svg";

const HomeAv3TopText = () => {
  return (
    <div className="top-text-container">
      <span className="top-text-browse">Browse By Category</span>
      <div className="arrows">
        <img src={Arrow} alt="arrow" className="arrow-one" />
        <img src={Arrow1} alt="arrow" className="arrow-two" />
      </div>
    </div>
  );
};

export default HomeAv3TopText;
