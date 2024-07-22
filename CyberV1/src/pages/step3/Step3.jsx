/* eslint-disable no-unused-vars */
import React from "react";
import "./step3.css";
import Step3A1 from "../../components/step3A/step3A1/Step3A1";
import Step3A1V2 from "../../components/step3A/step3A1/Step3A1V2";
import Step3A1V3 from "../../components/step3A/step3A1/Step3A1V3";
const Step3 = () => {
  return (
    <>
      <div className="step1-main" style={{ boxSizing: "border-box" }}>
        <Step3A1 />
        <Step3A1V2 />
        <Step3A1V3 />
      </div>
      <div className="step3-main1"></div>
    </>
  );
};

export default Step3;
