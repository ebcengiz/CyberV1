/* eslint-disable no-unused-vars */
import React from "react";
import "./step2.css";
import Step2A1V1 from "../../components/step2A/step2A1/Step2A1V1";
import Step2A1V2 from "../../components/step2A/step2A1/Step2A1V2";
import Step2A1V3 from "../../components/step2A/step2A1/Step2A1V3";
const Step2 = () => {
  return (
    <>
      <div className="step1-main">
        <Step2A1V1 />
        <Step2A1V2 />
        <Step2A1V3 />
      </div>
    </>
  );
};

export default Step2;
