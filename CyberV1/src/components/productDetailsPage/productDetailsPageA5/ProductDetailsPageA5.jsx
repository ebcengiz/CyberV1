/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./productDetailsPageA5.css";
import StarV1 from "../../../assets/assetsV3/Star1.svg";
import StarV2 from "../../../assets/assetsV3/Star5.svg";
import Form from "react-bootstrap/Form";
import axios from "axios";
import ProductDetailsPageCard from "./productDetailsPageCard/ProductDetailsPageCard";

const ProductDetailsPageA5 = () => {
  const [pDpReview, setPdPreview] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/productDetailsPageV")
      .then((response) => setPdPreview(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="productDetailsPage-tp-v">
        <div className="productDetailsPage-tp-v1">
          <span className="productDetailsPage-tp-v1-spn1">Reviews</span>
        </div>
        <div className="productDetailsPage-tp-v2">
          <div className="productDetailsPage-tp-v2-dv1">
            <span className="productDetailsPage-tp-v2-dv1-spn1">4.8</span>
            <span className="productDetailsPage-tp-v2-dv1-spn2">
              of 125 reviews
            </span>
            <div className="productDetailsPage-tp-v2-dv1-stars">
              <img src={StarV1} alt="Star" />
              <img src={StarV1} alt="Star" />
              <img src={StarV1} alt="Star" />
              <img src={StarV1} alt="Star" />
              <img src={StarV2} alt="Star" />
            </div>
          </div>
          <div className="productDetailsPage-tp-v2-dv2">
            <div className="productDetailsPage-tp-v2-dv2-l">
              <span className="productDetailsPage-tp-v2-dv2-l-spn1">
                Excellent
              </span>
              <div className="productDetailsPage-tp-v2-dv2-l-sldr1">
                <div className="productDetailsPage-tp-v2-dv2-l-sldr2 excellent"></div>
              </div>
              <span className="productDetailsPage-tp-v2-dv2-l-spn2">100</span>
            </div>
            <div className="productDetailsPage-tp-v2-dv2-l">
              <span className="productDetailsPage-tp-v2-dv2-l-spn1">Good</span>
              <div className="productDetailsPage-tp-v2-dv2-l-sldr1">
                <div className="productDetailsPage-tp-v2-dv2-l-sldr2 good"></div>
              </div>
              <span className="productDetailsPage-tp-v2-dv2-l-spn2">11</span>
            </div>
            <div className="productDetailsPage-tp-v2-dv2-l">
              <span className="productDetailsPage-tp-v2-dv2-l-spn1">
                Average
              </span>
              <div className="productDetailsPage-tp-v2-dv2-l-sldr1">
                <div className="productDetailsPage-tp-v2-dv2-l-sldr2 average"></div>
              </div>
              <span className="productDetailsPage-tp-v2-dv2-l-spn2">3</span>
            </div>
            <div className="productDetailsPage-tp-v2-dv2-l">
              <span className="productDetailsPage-tp-v2-dv2-l-spn1">
                Below Average
              </span>
              <div className="productDetailsPage-tp-v2-dv2-l-sldr1">
                <div className="productDetailsPage-tp-v2-dv2-l-sldr2 below-average"></div>
              </div>
              <span className="productDetailsPage-tp-v2-dv2-l-spn2">8</span>
            </div>
            <div className="productDetailsPage-tp-v2-dv2-l">
              <span className="productDetailsPage-tp-v2-dv2-l-spn1">Poor</span>
              <div className="productDetailsPage-tp-v2-dv2-l-sldr1">
                <div className="productDetailsPage-tp-v2-dv2-l-sldr2 poor"></div>
              </div>
              <span className="productDetailsPage-tp-v2-dv2-l-spn2">1</span>
            </div>
          </div>
        </div>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Leave Comment"
          className="productDetailsPage-fld"
        />
        {pDpReview.map((product) => (
          <div className="productDetailsPage-tp-v3" key={product.id}>
            <ProductDetailsPageCard
              imgProductDetailsPageVdB={product.imgProductDetailsPageV}
              PdPNameSurnameDb={product.PdPNameSurname}
              PdPStartsDb={product.PdPStarts}
              PdPDateDb={product.PdPDate}
              PdPTextDb={product.PdPText}
              SubimgProductDetailsPageV1Db={product.SubimgProductDetailsPageV1}
              SubimgProductDetailsPageV2Db={product.SubimgProductDetailsPageV2}
              id={product.id} // id prop'unu burada iletiyoruz
              key={product.id} // key prop'u da burada id'ye eşit olarak belirliyoruz
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetailsPageA5;
