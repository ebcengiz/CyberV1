/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./step3A2V2.css";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CreditCard from "../../../../assets/assetsV4/CreditCard.svg";
import IconsB from "../../../../assets/assetsV4/IconsBank.svg";
import MasterCard from "../../../../assets/assetsV4/Mastercard.svg";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
// import { useProductContext } from "../../productContext/ProductContext";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../../productContext/ProductContext";
const Step3A2V2 = ({ step }) => {
  const { selectStep } = useProductContext();
  const navigate = useNavigate();
  const handleClickBack = () => {
    selectStep(step);
    navigate("/step2");
  };
  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .matches(/^[0-9]{16}$/, "Card number is not valid")
      .required("Card number is required"),
    cardHolder: Yup.string().required("Card holder name is required"),
    expiryDate: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Expiry date is not valid")
      .required("Expiry date is required"),
    cvv: Yup.string()
      .matches(/^[0-9]{3,4}$/, "CVV is not valid")
      .required("CVV is required"),
  });

  return (
    <>
      <div className="step3A2V2-main">
        <span className="step3A2V2-main-text">Payment</span>
        <div className="step3A2V2-main-tabs">
          <Link
            to="/step3"
            className="step3A2V2-main-tabs-text"
            style={{ marginRight: "56px" }}
          >
            Credit Card
          </Link>
          <Link
            to="ebc"
            className="step3A2V2-main-tabs-text"
            style={{ marginRight: "56px" }}
          >
            PayPal
          </Link>
          <Link to="/ebc" className="step3A2V2-main-tabs-text">
            PayPal Credit
          </Link>
        </div>
        <div className="credit-card">
          <img
            src={CreditCard}
            alt="Credit Card"
            className="credit-card-image"
          />
          <div className="card-details">
            <img src={IconsB} alt="" className="bank-name" />
            <div className="card-number">4085 9536 8475 9530</div>
            <div className="card-holder-name">Cardholder</div>
            <img src={MasterCard} alt="" className="expiry-date" />
          </div>
        </div>
        <div className="credit-card-form">
          <Formik
            initialValues={{
              cardNumber: "",
              cardHolder: "",
              expiryDate: "",
              cvv: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form>
                <div className="form-group">
                  <Field
                    name="cardHolder"
                    type="text"
                    className="form-control"
                    placeholder="Cardholder Name"
                  />
                  <ErrorMessage
                    name="cardHolder"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-group" style={{ marginTop: "16px" }}>
                  <Field
                    name="cardNumber"
                    type="text"
                    className="form-control"
                    placeholder="Card Number"
                  />
                  <ErrorMessage
                    name="cardNumber"
                    component="div"
                    className="error"
                  />
                </div>
                <div
                  className="form-group1"
                  style={{ marginTop: "16px", marginBottom: "49px" }}
                >
                  <div className="form-group">
                    <Field
                      name="expiryDate"
                      type="text"
                      className="form-control"
                      placeholder="Exp.Date"
                    />
                    <ErrorMessage
                      name="expiryDate"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      name="cvv"
                      type="text"
                      className="form-control"
                      placeholder="CVV"
                    />
                    <ErrorMessage
                      name="cvv"
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="step3A2V2-main-checkboxF">
          <Form.Check
            type="checkbox"
            label={
              <>
                <span className="step3A2V2-main-checkboxF-text">
                  Same as billing address
                </span>
              </>
            }
            className="custom-checkbox"
            onChange=""
          />
        </div>
        <div className="step3A2V2-main-buttons">
          <button className="step3A2V2-main-buttonB" onClick={handleClickBack}>
            Back
          </button>
          <button className="step3A2V2-main-buttonP" onClick="">
            Pay
          </button>
        </div>
      </div>
    </>
  );
};

export default Step3A2V2;
