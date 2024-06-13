/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv2A4Text.css";
import HomeAvB2 from "../homeAvB2/HomeAvB2";

const HomeAv2A4Text = () => {
  return (
    <>
      <div className="m-content d-flex flex-column justify-content-start align-items-start">
        <span className="m-t-t text-nowrap">
          Macbook{" "}
          <span className="m-s-t-t">
            <b>Air</b>
          </span>
        </span>
        <span className="m-d-t-t">
          The new 15‑inch MacBook Air makes room for more of what you love with
          a spacious Liquid Retina display.
        </span>
        <div className="d-flex flex-column justify-content-center align-items-center text-nowrap">
          <HomeAvB2 />
        </div>
      </div>
    </>
  );
};

export default HomeAv2A4Text;
