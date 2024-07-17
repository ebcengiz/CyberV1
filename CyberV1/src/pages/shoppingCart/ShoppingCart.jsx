/* eslint-disable no-unused-vars */
import React from "react";
import "./shoppingCart.css";
import ProductImgIphone from "../../assets/assetsV3/ProductImageIphone.svg";
import Mines from "../../assets/assetsV3/Vector53.svg";
import Plus from "../../assets/assetsV3/Plus.svg";
import Close from "../../assets/assetsV3/Close.svg";
import AirPodsP from "../../assets/assetsV3/image56.svg";
import AppleWatchP from "../../assets/assetsV3/image57.svg";
const ShoppingCart = () => {
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
        <div className="shoppingCart-main-rightSide">fsafsafsa</div>
      </div>
    </>
  );
};

export default ShoppingCart;
