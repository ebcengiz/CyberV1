/* eslint-disable no-unused-vars */
import React from "react";
import "./productDetailsPageA3.css";
import BlackC from "../../../assets/assetsV3/Ellipse12.svg";
import PurpleC from "../../../assets/assetsV3/Ellipse13.svg";
import OrangeC from "../../../assets/assetsV3/Ellipse15.svg";
import YellowC from "../../../assets/assetsV3/Ellipse16.svg";
import GrayC from "../../../assets/assetsV3/Ellipse14.svg";
import styled from "styled-components";
import DetailCard from "./DetailCard";
import ScreensizeV from "../../../assets/assetsV3/Screensize.svg";
import SmartphoneV1 from "../../../assets/assetsV3/smartphone-r.svg";
import SmartphoneV2 from "../../../assets/assetsV3/smartphone-r1.svg";
import SmartphoneV3 from "../../../assets/assetsV3/smartphone-r3.svg";
import SmartphoneV4 from "../../../assets/assetsV3/smartphone-r4.svg";
import SmartphoneV5 from "../../../assets/assetsV3/smartphone-r5.svg";

const PdPButtonV1 = styled.button`
  width: 122px !important;
  height: 48px !important;
  padding: 16px 24px !important;
  gap: 8px !important;
  border-radius: 8px !important;
  border: 1px solid #d5d5d5 !important;
  opacity: 0px !important;
  /* color: white; */
  background-color: white !important;
  text-align: center !important;
  align-items: center !important;
  justify-content: center !important;
  font-family: "SF Pro Display", sans-serif !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 16px !important;
  text-align: center !important;
  color: #d5d5d5 !important;
`;

const PdPButtonV2 = styled.button`
  width: 122px !important;
  height: 48px !important;
  padding: 16px 24px !important;
  gap: 8px !important;
  border-radius: 8px !important;
  border: 1px solid #d5d5d5 !important;
  opacity: 0px !important;
  background-color: white !important;
  text-align: center !important;
  align-items: center !important;
  justify-content: center !important;
  font-family: "SF Pro Display", sans-serif !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 16px !important;
  text-align: center !important;
  color: #6f6f6f !important;
`;

const PdPButtonV3 = styled.button`
  width: 122px !important;
  height: 48px !important;
  padding: 16px 24px !important;
  gap: 8px !important;
  border-radius: 8px !important;
  border: 1px solid #d5d5d5 !important;
  opacity: 0px !important;
  background-color: white !important;
  text-align: center !important;
  align-items: center !important;
  justify-content: center !important;
  font-family: "SF Pro Display", sans-serif !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 16px !important;
  text-align: center !important;
  color: #6f6f6f !important;
`;

const PdPButtonV4 = styled.button`
  width: 122px !important;
  height: 48px !important;
  padding: 16px 24px !important;
  gap: 8px !important;
  border-radius: 8px !important;
  border: 1px solid black !important;
  opacity: 0px !important;
  background-color: white !important;
  text-align: center !important;
  align-items: center !important;
  justify-content: center !important;
  font-family: "SF Pro Display", sans-serif !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 16px !important;
  text-align: center !important;
  color: black !important;
`;

const ProductDetailsPageA3 = () => {
  return (
    <>
      <span className="title-v1">Apple iPhone 14 Pro Max</span>
      <div className="price-v">
        <span className="price-v1">$1399</span>
        <span className="price-v2">$1499</span>
      </div>
      <div>
        <div className="info-v">
          <span className="text-v1">Select color :</span>
          <img src={BlackC} alt="black" />
          <img src={PurpleC} alt="purple" />
          <img src={OrangeC} alt="orange" />
          <img src={YellowC} alt="yellow" />
          <img src={GrayC} alt="gray" />
        </div>
        <div className="tabs-memory-v">
          <PdPButtonV1>128GB</PdPButtonV1>
          <PdPButtonV2>256GB</PdPButtonV2>
          <PdPButtonV3>512GB</PdPButtonV3>
          <PdPButtonV4>1TB</PdPButtonV4>
        </div>
        <div className="details-v">
          <DetailCard
            imgPdC={ScreensizeV}
            textPdC1="Screen size"
            textPdC2='6.7"'
          />
          <DetailCard
            imgPdC={SmartphoneV1}
            textPdC1="CPU"
            textPdC2="Apple A16 Bionic"
          />
          <DetailCard
            imgPdC={SmartphoneV2}
            textPdC1="Number of Cores"
            textPdC2="6"
          />
          <DetailCard
            imgPdC={SmartphoneV3}
            textPdC1="Main camera"
            textPdC2="48-12 -12 MP"
          />
          <DetailCard
            imgPdC={SmartphoneV4}
            textPdC1="Front-camera"
            textPdC2="12 MP"
          />
          <DetailCard
            imgPdC={SmartphoneV5}
            textPdC1="Battery capacity"
            textPdC2="4323 mAh"
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPageA3;
