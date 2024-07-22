/* eslint-disable no-unused-vars */
import React from "react";
import "./step2A2B1.css";
import Form from "react-bootstrap/Form";
import FrameSdI from "../../../assets/FrameSd.svg";
const Step2A2B1 = () => {
  return (
    <>
      <div className="step2A2B1-main">
        <span className="step2A2B1-text">Shipment Method</span>
        <div className="step2A2B1-main-methods">
          <Form.Check
            type="radio"
            aria-label="radio 1"
            className="custom-radio"
          />
          <span className="step2A2B1-main-methods-text1">Free</span>
          <span className="step2A2B1-main-methods-text2">
            Regulary shipment
          </span>
          <span className="step2A2B1-main-methods-text3">17 Oct, 2023</span>
        </div>
        <div className="step2A2B1-main-methods">
          <Form.Check
            type="radio"
            aria-label="radio 1"
            className="custom-radio"
          />
          <span className="step2A2B1-main-methods1-text1">$8.50</span>
          <span className="step2A2B1-main-methods1-text2">
            Get your delivery as soon as possible
          </span>
          <span className="step2A2B1-main-methods1-text3">1 Oct, 2023</span>
        </div>
        <div
          className="step2A2B1-main-methods"
          style={{ marginBottom: "224px" }}
        >
          <Form.Check
            type="radio"
            aria-label="radio 1"
            className="custom-radio"
          />
          <span className="step2A2B1-main-methods1-text1">Schedule</span>
          <span className="step2A2B1-main-methods1-text2">
            Pick a date when you want to get your delivery
          </span>
          <img src={FrameSdI} alt="frame" style={{ cursor: "pointer" }} />
        </div>
        <div className="step1A2B1-main1">
          <button className="step1A2B1-main1-btnw">Back</button>
          <button className="step1A2B1-main1-btnb">Next</button>
        </div>
      </div>
    </>
  );
};

export default Step2A2B1;
