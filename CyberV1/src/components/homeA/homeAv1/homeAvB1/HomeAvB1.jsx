/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
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
`;

const HomeAvB1 = () => {
  return (
    <>
      <StyledButton>Shop Now</StyledButton>
    </>
  );
};

export default HomeAvB1;
