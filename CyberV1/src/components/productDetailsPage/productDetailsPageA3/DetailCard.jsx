/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import Figure from "react-bootstrap/Figure";

const CardContainer = styled.div`
  width: 168px;
  height: 64px;
  padding: 16px;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  box-sizing: border-box;
`;

const DetailCard = ({ imgPdC, textPdC1, textPdC2 }) => {
  return (
    <CardContainer>
      <img src={imgPdC} alt="img" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          boxSizing: "border-box",
          textWrap: "nowrap",
          marginLeft: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "16px",
            textAlign: "left",
            color: "#A7A7A7",
          }}
        >
          {textPdC1}
        </span>
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "16px",
            textAlign: "left",
            color: "#4E4E4E",
          }}
        >
          {textPdC2}
        </span>
      </div>
    </CardContainer>
  );
};

export default DetailCard;
