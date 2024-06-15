/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv3CategoryCard.css";

const HomeAv3CategoryCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, imgE } = props;
  return (
    <>
      <div className="homeAv3CategoryCardE">
        <img src={imgE} alt="img" className="homeAv3CategoryCardEimg" />
        <span className="homeAv3CategoryCardEText">{title}</span>
      </div>
    </>
  );
};

export default HomeAv3CategoryCard;
