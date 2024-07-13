/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./productDetailsPageCard.css";

const ProductDetailsPageCard = ({
  imgProductDetailsPageVdB,
  PdPNameSurnameDb,
  PdPDateDb,
  PdPStartsDb,
  PdPTextDb,
  SubimgProductDetailsPageV1Db,
  SubimgProductDetailsPageV2Db,
  id,
}) => {
  return (
    <>
      <div className="productDetailsPageCardImg">
        <img src={imgProductDetailsPageVdB} alt="productDetailsImg" />
      </div>
      <div className="productDetailsPageCard-first-spn-dv-main">
        <div className="productDetailsPageCard-first-spn-dv">
          <span className="productDetailsPageCard-first-spn-dv-spn1">
            {PdPNameSurnameDb}
          </span>
          <span className="productDetailsPageCard-first-spn-dv-spn2">
            {PdPDateDb}
          </span>
        </div>
        <div className="productDetailsPageCardStars">
          <img src={PdPStartsDb} alt="star" />
        </div>
        <div className="productDetailsPageCard-first-spn-dv-main1">
          <span>{PdPTextDb}</span>
        </div>
        {/* Sadece id'si 3 olan veri için alt resimleri göster */}
        {id === "3" && (
          <div className="productDetailsPageCard-sub-images">
            <img
              src={SubimgProductDetailsPageV1Db}
              alt="subimage1"
              className="productDetailsPageCard-sub-images1"
            />
            <img src={SubimgProductDetailsPageV2Db} alt="subimage2" />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetailsPageCard;
