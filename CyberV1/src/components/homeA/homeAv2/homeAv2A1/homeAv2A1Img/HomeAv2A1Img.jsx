/* eslint-disable no-unused-vars */
import React from "react";
import Figure from "react-bootstrap/Figure";
import PlayStationI from "../../../../../assets/PlayStation.svg";

const HomeAv2A1Img = () => {
  return (
    <>
      <Figure className="p-0 m-0">
        <Figure.Image
          className="m-0"
          width={360}
          height={343}
          alt="360x343"
          src={PlayStationI}
        />
      </Figure>
    </>
  );
};

export default HomeAv2A1Img;
