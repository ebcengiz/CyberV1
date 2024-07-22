/* eslint-disable no-unused-vars */
import React from "react";
import "./step3A2V1.css";
import IphoneM from "../../../../assets/assetsV4/Phonemini.svg";
import AirPodsM from "../../../../assets/assetsV4/AirPodsMini.svg";
import AppleWm from "../../../../assets/assetsV4/AppleWMini.svg";
const Step3A2V1 = () => {
  return (
    <>
      <div className="step3A2V1-main">
        <span className="step3A2V1-main-text">Summary</span>
        <div className="step3A2V1-main-addedPro-box">
          <img src={IphoneM} alt="Iphone" />
          <span className="step3A2V1-main-addedPro-box-text">
            Apple iPhone 14 Pro Max 128Gb
          </span>
          <span className="step3A2V1-main-addedPro-box-text1">$1399</span>
        </div>
        <div className="step3A2V1-main-addedPro-box">
          <img src={AirPodsM} alt="AirPodsM" />
          <span className="step3A2V1-main-addedPro-box-text">
            AirPods Max Silver
          </span>
          <span className="step3A2V1-main-addedPro-box-text1">$549</span>
        </div>
        <div className="step3A2V1-main-addedPro-box">
          <img src={AppleWm} alt="AppleWm" />
          <span className="step3A2V1-main-addedPro-box-text">
            Apple Watch Series 9 GPS 41mm
          </span>
          <span className="step3A2V1-main-addedPro-box-text1">$399</span>
        </div>
        <div className="step3A2V1-main-details">
          <span className="step3A2V1-main-details-spn1">Address</span>
          <span className="step3A2V1-main-details-spn2">
            1131 Dusty Townline, Jacksonville, TX 40322
          </span>
          <span className="step3A2V1-main-details-spn1">Shipment method</span>
          <span className="step3A2V1-main-details-spn3">Free</span>
          <div className="step3A2V1-main-details-substotal-v1">
            <span className="step3A2V1-main-details-substotal-v1-spn1">
              Subtotal
            </span>
            <span className="step3A2V1-main-details-substotal-v1-spn2">
              $2347
            </span>
          </div>
          <div className="step3A2V1-main-details-substotal-v1">
            <span className="step3A2V1-main-details-substotal-v1-spn3">
              Estimated Tax
            </span>
            <span className="step3A2V1-main-details-substotal-v1-spn2">
              $50
            </span>
          </div>
          <div className="step3A2V1-main-details-substotal-v1">
            <span className="step3A2V1-main-details-substotal-v1-spn3">
              Estimated shipping & Handling
            </span>
            <span className="step3A2V1-main-details-substotal-v1-spn2">
              $29
            </span>
          </div>
          <div className="step3A2V1-main-details-substotal-v1">
            <span className="step3A2V1-main-details-substotal-v1-spn1">
              Total
            </span>
            <span className="step3A2V1-main-details-substotal-v1-spn4">
              $2426
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3A2V1;
