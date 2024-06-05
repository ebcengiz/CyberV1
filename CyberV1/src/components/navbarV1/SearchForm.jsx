/* eslint-disable no-unused-vars */
import React from "react";
import logoSearch from "../../assets/searchI.svg";
import styled from "styled-components";

const SearchFormE = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 372px;
  height: 56px;
  border-radius: 16px;
  padding: 16px;
  /* gap: 8px; */
  background-color: #f5f5f5;
  box-sizing: border-box;
`;

const LogoImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const SearchInput = styled.input`
  flex: 1;
  margin-right: 8px;
  border: 1px solid #f5f5f5;
  padding: 8px;
  border-radius: 4px;
  background-color: #f5f5f5; /* Arka plan rengini SearchForm ile aynı yap */
  box-sizing: border-box; /* Padding ve border genişliğini içeriye doğru hesaplar */
  transition: border-color 0.3s; /* Border renginin değişim süresi */

  &:focus {
    outline: none; /* Odaklanıldığında kenarlığı kaldır */
    /* border-color: #ced4da; Odaklanıldığında border rengini değiştir */
  }

  &::placeholder {
    color: #adb5bd; /* Placeholder rengi */
  }
`;

const SearchForm = () => {
  return (
    <>
      <SearchFormE>
        <LogoImg src={logoSearch} alt="logo-search" />
        <SearchInput type="search" placeholder="Search" aria-label="Search" />
      </SearchFormE>
    </>
  );
};

export default SearchForm;
