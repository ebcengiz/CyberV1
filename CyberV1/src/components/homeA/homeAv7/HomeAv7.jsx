/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv7.css";
import Banner2L from "../../../../public/Banner2L.svg";
import Ratio from "react-bootstrap/Ratio";

const HomeAv7 = () => {
  return (
    <>
      <div style={{ width: "100%" }} className="homeAv7E">
        <Ratio aspectRatio="16x9">
          <embed type="image/svg+xml" src={Banner2L} />
        </Ratio>
      </div>
    </>
  );
};

export default HomeAv7;
