/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h1>404 - Sayfa Bulunmadı...</h1>
      <Link to="/" className="btn btn-danger">
        Anasayfa
      </Link>
    </>
  );
};

export default PageNotFound;
