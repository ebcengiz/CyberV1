/* eslint-disable no-unused-vars */
import React from "react";
import "./step2.css";
import Step2A1V1 from "../../components/step2A/step2A1/Step2A1V1";
import Step2A1V2 from "../../components/step2A/step2A1/Step2A1V2";
import Step2A1V3 from "../../components/step2A/step2A1/Step2A1V3";
import Step2A2B1 from "../../components/step2A/step2A2/Step2A2B1";
const Step2 = () => {
  return (
    <>
      <div className="step1-main">
        <Step2A1V1 />
        <Step2A1V2 />
        <Step2A1V3 />
      </div>
      <div className="step2-main1">
        <Step2A2B1 />
      </div>
    </>
  );
};

export default Step2;
