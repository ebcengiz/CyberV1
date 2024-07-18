/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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
import ShopV1 from "../../../assets/assetsV3/shop.svg";
import DeliveryTruckV1 from "../../../assets/assetsV3/DeliveryTruck.svg";
import VerifyV1 from "../../../assets/assetsV3/verify.svg";
import { useProductContext } from "../../productContext/ProductContext";
import { useNavigate } from "react-router-dom";

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

const PdPButtonV5 = styled.button`
  width: 260px;
  height: 56px;
  padding: 16px 56px 16px 56px;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid black;
  opacity: 0px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "SF Pro Display", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;
const PdPButtonV6 = styled.button`
  width: 260px;
  height: 56px;
  padding: 16px 56px 16px 56px;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid black;
  opacity: 0px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "SF Pro Display", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;
const ProductDetailsPageA3 = ({ productDp }) => {
  const [showMore, setShowMore] = useState(false);
  const { selectProductDp } = useProductContext();
  const navigate = useNavigate();

  const handleButtonClickDp = () => {
    selectProductDp(productDp);
    navigate("/shoppingCart");
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

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
        <div className="details-txt-v">
          {showMore ? (
            <span
              className="details-txt-v1"
              onClick={handleMoreClick}
              style={{ cursor: "pointer" }}
            >
              Coming Soon!!!
            </span>
          ) : (
            <span className="details-txt-v1">
              Enhanced capabilities thanks toan enlarged display of 6.7
              inchesand work without rechargingthroughout the day. Incredible
              photosas in weak, yesand in bright lightusing the new systemwith
              two cameras{" "}
              <span className="details-txt-v2" onClick={handleMoreClick}>
                more...
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="pdp-btns-v">
        <PdPButtonV5 onClick={handleButtonClickDp}>Add to Wishlist</PdPButtonV5>
        <PdPButtonV6 onClick={handleButtonClickDp}>Add to Card</PdPButtonV6>
      </div>
      <div className="pdp-icn-v">
        <div
          className="pdp-icn-v1"
          style={{ marginRight: "32px", textWrap: "nowrap" }}
        >
          <img
            src={DeliveryTruckV1}
            alt="deliverytruck"
            className="pdp-icn-v1-img"
          />
          <div className="pdp-icn-v-spnDv">
            <span className="pdp-icn-v1-txt1">Free Delivery</span>
            <span className="pdp-icn-v1-txt2">1-2 day</span>
          </div>
        </div>
        <div
          className="pdp-icn-v1"
          style={{ marginRight: "32px", textWrap: "nowrap" }}
        >
          <img src={ShopV1} alt="deliverytruck" className="pdp-icn-v1-img" />
          <div className="pdp-icn-v-spnDv">
            <span className="pdp-icn-v1-txt1">In Stock</span>
            <span className="pdp-icn-v1-txt2">Today</span>
          </div>
        </div>
        <div className="pdp-icn-v1">
          <img src={VerifyV1} alt="deliverytruck" className="pdp-icn-v1-img" />
          <div className="pdp-icn-v-spnDv">
            <span className="pdp-icn-v1-txt1">Guaranteed</span>
            <span className="pdp-icn-v1-txt2">1 year</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPageA3;
