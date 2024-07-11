/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./productDetailsPageA4.css";
import DownArrowV from "../../../assets/assetsV3/down-arrow.svg";
import styled from "styled-components";

const DownArrowBtn = styled.button`
  width: 208px;
  height: 48px;
  padding: 12px 56px 12px 56px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #545454;
  opacity: 0px;
  background-color: white;
  color: black;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;

const ProductDetailsPageA4 = () => {
  return (
    <>
      <div className="productDetailsPage-v">
        <span className="productDetailsPage-v-spn1">Details</span>
        <span className="productDetailsPage-v-spn2">
          Just as a book is judged by its cover, the first thing you notice when
          you pick up a modern smartphone is the display. Nothing surprising,
          because advanced technologies allow you to practically level the
          display frames and cutouts for the front camera and speaker, leaving
          no room for bold design solutions. And how good that in such realities
          Apple everything is fine with displays. Both critics and mass
          consumers always praise the quality of the picture provided by the
          products of the Californian brand. And last year's 6.7-inch Retina
          panels, which had ProMotion, caused real admiration for many.
        </span>
        <span className="productDetailsPage-v-spn3">Screen</span>
        <div className="productDetailsPage-v-spn-div1">
          <span className="productDetailsPage-v-spn4">Screen diagonal</span>
          <span className="productDetailsPage-v-spn5">6.7"</span>
        </div>
        <div className="productDetailsPage-v-spn-div1">
          <span className="productDetailsPage-v-spn6">
            The screen resolution
          </span>
          <span className="productDetailsPage-v-spn7">2796x1290</span>
        </div>
        <div className="productDetailsPage-v-spn-div1">
          <span className="productDetailsPage-v-spn6">
            The screen refresh rate
          </span>
          <span className="productDetailsPage-v-spn7">120 Hz</span>
        </div>
        <div className="productDetailsPage-v-spn-div1">
          <span className="productDetailsPage-v-spn6">The pixel density</span>
          <span className="productDetailsPage-v-spn7">460 ppi</span>
        </div>
        <div className="productDetailsPage-v-spn-div1">
          <span className="productDetailsPage-v-spn6">Screen type</span>
          <span className="productDetailsPage-v-spn7">OLED</span>
        </div>
        <div className="productDetailsPage-v-spn-div2">
          <span className="productDetailsPage-v-spn8">Additionally</span>
          <span className="productDetailsPage-v-spn9">
            Dynamic Island
            <br />
            Always-On display
            <br />
            HDR display
            <br />
            True Tone
            <br />
            Wide color (P3)
          </span>
        </div>
        <span className="productDetailsPage-v-spn3">CPU</span>
        <div className="productDetailsPage-v-spn-div3">
          <span className="productDetailsPage-v-spn10">CPU</span>
          <span className="productDetailsPage-v-spn11">A16 Bionic</span>
        </div>
        <div className="productDetailsPage-v-spn-div4">
          <span className="productDetailsPage-v-spn10">Number of cores</span>
          <span className="productDetailsPage-v-spn11">6</span>
        </div>
        <CenteredContainer>
          <DownArrowBtn style={{ textWrap: "nowrap" }}>
            <span className="downArrowBtn-spn">View More</span>
            <img
              src={DownArrowV}
              alt="DownArrowV"
              className="downArrowBtn-img"
            />
          </DownArrowBtn>
        </CenteredContainer>
      </div>
    </>
  );
};

export default ProductDetailsPageA4;
