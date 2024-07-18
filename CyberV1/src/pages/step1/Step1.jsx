/* eslint-disable no-unused-vars */
import React from "react";
import "./step1.css";
import Step1A1 from "../../components/step1A/step1A1/Step1A1";
import Step1A2 from "../../components/step1A/step1A1/Step1A2";
import Step1A3 from "../../components/step1A/step1A1/Step1A3";
const Step1 = () => {
  return (
    <>
      <div className="step1-main">
        <Step1A1 />
        <Step1A2 />
        <Step1A3 />
      </div>
    </>
  );
};

export default Step1;
