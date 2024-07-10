/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinkV1 = styled(Link)`
  width: 184px;
  height: 56px;
  padding: 16px 56px;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid #000000;
  opacity: 1;
  background-color: #ededed;
  font-family: "SF Pro Display", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, opacity 0.3s;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    background-color: #f0f0f0; /* Hover rengi */
  }
`;

const HomeAvB2 = () => {
  return (
    <>
      <StyledLinkV1 to="/productsPage">Shop Now</StyledLinkV1>
    </>
  );
};

export default HomeAvB2;
