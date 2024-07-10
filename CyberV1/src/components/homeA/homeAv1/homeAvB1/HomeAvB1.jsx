/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 184px;
  height: 56px;
  border-radius: 6px;
  border: 1px solid white;
  padding: 16px 56px 16px 56px !important;
  gap: 8px;
  background: linear-gradient(90.7deg, #211c24 0.64%, #211c24 101%);
  color: white;
  white-space: nowrap;
  text-decoration: none;
`;

const HomeAvB1 = () => {
  return (
    <>
      <StyledLink to="/productsPage">Shop Now</StyledLink>
    </>
  );
};

export default HomeAvB1;
