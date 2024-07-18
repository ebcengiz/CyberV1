/* eslint-disable no-unused-vars */
import React from "react";
import "./step1A1.css";
import Location1 from "../../../assets/Location.svg";
const Step1A1 = () => {
  return (
    <>
      <div className="step1A1-cnt1">
        <img src={Location1} alt="Location1" className="step1A1-cnt1-lct" />
        <div className="step1A1-cnt1-txt1">
          <span className="step1A1-cnt1-txt1-spn1">Step 1</span>
          <span className="step1A1-cnt1-txt1-spn2">Address</span>
        </div>
      </div>
    </>
  );
};

export default Step1A1;
