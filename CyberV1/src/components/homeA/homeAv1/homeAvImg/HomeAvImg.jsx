/* eslint-disable no-unused-vars */
import React from "react";
import Image from "react-bootstrap/Image";
import IphoneI from "../../../../assets/IphoneI.svg";
import "./homeAvImg.css";
const HomeAvImg = () => {
  return (
    <>
      <Image src={IphoneI} fluid className="img-ıphone" />;
    </>
  );
};

export default HomeAvImg;
