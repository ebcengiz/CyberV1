/* eslint-disable no-unused-vars */
import React from "react";
import Figure from "react-bootstrap/Figure";
import AppleVisionProI from "../../../../../assets/AppleVisionPro.svg";
import "./homeAv2A3Image.css";

const HomeAv2A3Image = () => {
  return (
    <>
      <Figure>
        <Figure.Image
          width={136}
          height={190}
          alt="136x190"
          src={AppleVisionProI}
          className="appleVision-image"
        />
      </Figure>
    </>
  );
};

export default HomeAv2A3Image;
