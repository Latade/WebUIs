import React from "react";
import "./App.css";

const LeftPane = () => (
  <div className="GreyRec">
    <div className="TopText">
      <h1>My Wallets</h1>
      <img src={require("../Images/AddSign.png")} width="25px" alt="addsign" />
    </div>
    <div className="Cards">
      <div className="Card">
        <img src={require("../Images/Visa.svg")} width="65px" alt="visa" />
        <h6>**** **** **** 2562</h6>
        <p>Valid Thru: 12/17</p>
      </div>
      <div className="Card">
        <img src={require("../Images/Amex.svg")} width="65px" alt="visa" />
        <h6>**** **** **** 21001</h6>
        <p>Valid Thru: 07/19</p>
      </div>
      <div className="Card">
        <img
          src={require("../Images/Mastercard.svg")}
          width="65px"
          alt="visa"
        />
        <h6>**** **** **** 8335</h6>
        <p>Valid Thru: 09/17</p>
      </div>
    </div>
  </div>
);

export default LeftPane;
