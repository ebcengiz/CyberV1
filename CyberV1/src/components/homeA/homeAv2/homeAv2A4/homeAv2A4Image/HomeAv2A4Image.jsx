/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv2A4Image.css";
import Figure from "react-bootstrap/Figure";
import MacBookPro14I from "../../../../../assets/MacBookPro14.svg";

const HomeAv2A4Image = () => {
  return (
    <>
      <Figure>
        <Figure.Image
          width={292}
          height={502}
          alt="292x502"
          src={MacBookPro14I}
        />
      </Figure>
    </>
  );
};

export default HomeAv2A4Image;
