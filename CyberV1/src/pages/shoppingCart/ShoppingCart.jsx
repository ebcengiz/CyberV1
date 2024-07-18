/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./shoppingCart.css";
import ProductImgIphone from "../../assets/assetsV3/ProductImageIphone.svg";
import Mines from "../../assets/assetsV3/Vector53.svg";
import Plus from "../../assets/assetsV3/Plus.svg";
import Close from "../../assets/assetsV3/Close.svg";
import AirPodsP from "../../assets/assetsV3/image56.svg";
import AppleWatchP from "../../assets/assetsV3/image57.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useProductContext } from "../../components/productContext/ProductContext";
import { useNavigate } from "react-router-dom";

const ShoppingCart = ({ productB }) => {
  const { selectProductB } = useProductContext();
  const navigate = useNavigate();

  const handleClickStep1 = () => {
    selectProductB(productB);
    navigate("/step1");
  };

  const validationSchema = Yup.object({
    code: Yup.string().required("Code is required"),
    cardNumber: Yup.string()
      .required("Card number is required")
      .max(15, "Card number must be at most 10 characters"),
  });
  return (
    <>
      <div className="shoppingCart-main">
        <div className="shoppingCart-main-leftSide">
          <span className="shoppingCart-main-leftSide-sc-spn">
            Shopping Cart
          </span>
          <div className="shoppingCart-main-leftSide-products">
            <div className="shoppingCart-main-leftSide-products-a1">
              <img
                src={ProductImgIphone}
                alt="Iphone"
                style={{ marginRight: "15px" }}
              />
              <div className="shoppingCart-main-leftSide-products-a1-spn-bx">
                <span className="shoppingCart-main-leftSide-products-a1-spn-bx-text1">
                  Apple iPhone 14 Pro Max 128Gb Deep Purple
                </span>
                <span className="shoppingCart-main-leftSide-products-a1-spn-bx-text2">
                  #25139526913984
                </span>
              </div>
              <button className="shoppingCart-main-leftSide-products-a1-mines">
                <img src={Mines} alt="mines" />
              </button>
              <span className="shoppingCart-main-leftSide-products-a1-number">
                1
              </span>
              <button className="shoppingCart-main-leftSide-products-a1-plus">
                <img src={Plus} alt="plus" />
              </button>
              <span className="shoppingCart-main-leftSide-products-a1-price">
                $1399
              </span>
              <button className="shoppingCart-main-leftSide-products-a1-close">
                <img src={Close} alt="close" />
              </button>
            </div>
            <div className="shoppingCart-main-leftSide-products-a1-hr"></div>
            <div className="shoppingCart-main-leftSide-products-a1">
              <img
                src={AirPodsP}
                alt="AirPods"
                style={{ marginRight: "15px" }}
              />
              <div className="shoppingCart-main-leftSide-products-a1-spn-bx">
                <span className="shoppingCart-main-leftSide-products-a1-spn-bx-text1">
                  AirPods Max Silver
                </span>
                <span className="shoppingCart-main-leftSide-products-a1-spn-bx-text2">
                  #53459358345
                </span>
              </div>
              <button className="shoppingCart-main-leftSide-products-a1-mines">
                <img src={Mines} alt="mines" />
              </button>
              <span className="shoppingCart-main-leftSide-products-a1-number">
                1
              </span>
              <button className="shoppingCart-main-leftSide-products-a1-plus">
                <img src={Plus} alt="plus" />
              </button>
              <span className="shoppingCart-main-leftSide-products-a1-price">
                $549
              </span>
              <button className="shoppingCart-main-leftSide-products-a1-close">
                <img src={Close} alt="close" />
              </button>
            </div>
            <div className="shoppingCart-main-leftSide-products-a1-hr"></div>
            <div className="shoppingCart-main-leftSide-products-a1">
              <img
                src={AppleWatchP}
                alt="AppleWatch"
                style={{ marginRight: "15px" }}
              />
              <div className="shoppingCart-main-leftSide-products-a1-spn-bx">
                <span className="shoppingCart-main-leftSide-products-a1-spn-bx-text1">
                  Apple Watch Series 9 GPS 41mm Starlight Aluminium
                </span>
                <span className="shoppingCart-main-leftSide-products-a1-spn-bx-text2">
                  #63632324
                </span>
              </div>
              <button className="shoppingCart-main-leftSide-products-a1-mines">
                <img src={Mines} alt="mines" />
              </button>
              <span className="shoppingCart-main-leftSide-products-a1-number">
                1
              </span>
              <button className="shoppingCart-main-leftSide-products-a1-plus">
                <img src={Plus} alt="plus" />
              </button>
              <span className="shoppingCart-main-leftSide-products-a1-price">
                $399
              </span>
              <button className="shoppingCart-main-leftSide-products-a1-close">
                <img src={Close} alt="close" />
              </button>
            </div>
          </div>
        </div>
        <div className="shoppingCart-main-rightSide">
          <span className="shoppingCart-main-rightSide-text-os">
            Order Summary
          </span>
          <div className="shoppingCart-main-rightSide-bx">
            <Formik
              initialValues={{ code: "", cardNumber: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("Form submitted", values);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group" style={{ marginBottom: "24px" }}>
                    <label className="form-group-lbl" htmlFor="code">
                      Discount code / Promo code
                    </label>
                    <Field
                      type="text"
                      name="code"
                      className="form-control"
                      placeholder="Code"
                    />
                    <ErrorMessage
                      name="code"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group" style={{ position: "relative" }}>
                    <label className="form-group-lbl" htmlFor="cardNumber">
                      Your bonus card number
                    </label>
                    <Field
                      type="text"
                      name="cardNumber"
                      className="form-control"
                      placeholder="Enter Card Number"
                    />
                    <button
                      type="submit"
                      className="apply-button"
                      disabled={isSubmitting}
                    >
                      Apply
                    </button>
                    <ErrorMessage
                      name="cardNumber"
                      component="div"
                      className="error-message"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="shoppingCart-main-rightSide-subText">
            <div className="shoppingCart-main-rightSide-subText1">
              <span className="shoppingCart-main-rightSide-subText1-s">
                Subtotal
              </span>
              <span className="shoppingCart-main-rightSide-subText1-prc1">
                $2347
              </span>
            </div>
            <div className="shoppingCart-main-rightSide-subText2">
              <span className="shoppingCart-main-rightSide-subText2-e">
                Estimated Tax
              </span>
              <span className="shoppingCart-main-rightSide-subText2-prc1">
                $50
              </span>
            </div>
            <div
              className="shoppingCart-main-rightSide-subText2"
              style={{ marginBottom: "16px" }}
            >
              <span className="shoppingCart-main-rightSide-subText2-e">
                Estimated shipping & Handling
              </span>
              <span className="shoppingCart-main-rightSide-subText2-prc1">
                $29
              </span>
            </div>
            <div className="shoppingCart-main-rightSide-subText1">
              <span className="shoppingCart-main-rightSide-subText1-s">
                Total
              </span>
              <span className="shoppingCart-main-rightSide-subText1-prc1">
                $2426
              </span>
            </div>
          </div>
          <button
            onClick={handleClickStep1}
            className="shoppingCart-main-rightSide-btn"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
