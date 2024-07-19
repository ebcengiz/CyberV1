/* eslint-disable no-unused-vars */
import React from "react";
import "./step1A2B1.css";
import Form from "react-bootstrap/Form";
import Actions1 from "../../../assets/Actions.svg";
import LineIcon1 from "../../../assets/Line+Icon.svg";

const Step1A2B1 = () => {
  return (
    <>
      <div className="step1A2B1-main">
        <span className="step1A2B1-text">Select Address</span>
        <div className="step1A2B1-main-adrs">
          <div className="step1A2B1-main-adrs-content">
            <div className="step1A2B1-main-adrs-content-top">
              <Form.Check
                type="radio"
                aria-label="radio 1"
                className="custom-radio"
              />
              <span className="step1A2B1-main-adrs-content-top-spn1">
                2118 Thornridge
              </span>
              <div className="step1A2B1-main-adrs-content-top-tag">HOME</div>
            </div>
            <div className="step1A2B1-main-adrs-content-top-info">
              <span className="step1A2B1-main-adrs-content-top-info-spn1">
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </span>
              <span className="step1A2B1-main-adrs-content-top-info-spn1">
                (209) 555-0104
              </span>
            </div>
          </div>
          <img
            src={Actions1}
            alt="Actions"
            className="step1A2B1-main-adrs-img"
          />
        </div>
        <div className="step1A2B1-main-adrs">
          <div className="step1A2B1-main-adrs-content">
            <div className="step1A2B1-main-adrs-content-top">
              <Form.Check
                type="radio"
                aria-label="radio 1"
                className="custom-radio"
              />
              <span className="step1A2B1-main-adrs-content-top-spn1">
                Headoffice
              </span>
              <div className="step1A2B1-main-adrs-content-top-tag">OFFICE</div>
            </div>
            <div className="step1A2B1-main-adrs-content-top-info">
              <span className="step1A2B1-main-adrs-content-top-info-spn1">
                2715 Ash Dr. San Jose, South Dakota 83475
              </span>
              <span className="step1A2B1-main-adrs-content-top-info-spn1">
                (704) 555-0127
              </span>
            </div>
          </div>
          <img
            src={Actions1}
            alt="Actions"
            className="step1A2B1-main-adrs-img"
          />
        </div>
        <img
          src={LineIcon1}
          alt="line+icon"
          className="step1A2B1-main-img"
          style={{ cursor: "pointer" }}
        />
        <span className="step1A2B1-main-text1" style={{ cursor: "pointer" }}>
          Add New Address
        </span>
      </div>
      <div className="step1A2B1-main1">
        <button className="step1A2B1-main1-btnw">Back</button>
        <button className="step1A2B1-main1-btnb">Next</button>
      </div>
    </>
  );
};

export default Step1A2B1;

<Form.Check type="radio" aria-label="radio 1" />;
