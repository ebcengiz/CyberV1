/* eslint-disable no-unused-vars */
import React from "react";
import "./step1A2.css";
import Shipping1 from "../../../assets/Shipping.svg";
const Step1A2 = () => {
  return (
    <>
      <div className="step1A1-cnt2">
        <img src={Shipping1} alt="Shipping1" className="step1A1-cnt1-shp" />
        <div className="step1A1-cnt2-txt1">
          <span className="step1A1-cnt2-txt1-spn1">Step 2</span>
          <span className="step1A1-cnt2-txt1-spn2">Shipping</span>
        </div>
      </div>
    </>
  );
};

export default Step1A2;
