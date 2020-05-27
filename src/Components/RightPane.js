import React from "react";
import "./App.css";

const RightPane = () => (
  <div className="RightPane">
    <div className="TopTextRight">
      <h1>Current Balance</h1>
      <h2>$729.00</h2>
    </div>
    <div className="Line" />

    <div className="RightTextGroup">
      <div className="RightTextSubGroup">
        <img src={require("../Images/Minus.png")} width="25px" alt="minus" />
        <div className="RightText">
          <h1>Apple iPhone 6, 6g GB</h1>
          <p>Electronics #343223 - 12 July, 2016</p>
        </div>
        <h2>$650.00</h2>
      </div>
      <div className="RightTextSubGroup">
        <img src={require("../Images/Plus.png")} width="25px" alt="minus" />
        <div className="RightText">
          <h1>Funds Added</h1>
          <p>Payment #343212 - 11 July, 2016</p>
        </div>
        <h3>$900.00</h3>
      </div>
      <div className="RightTextSubGroup">
        <img src={require("../Images/Minus.png")} width="25px" alt="minus" />
        <div className="RightText">
          <h1>Energy Bill</h1>
          <p>#343566 - 11 July, 2016</p>
        </div>
        <h2>$84.96</h2>
      </div>
      <div className="RightTextSubGroup">
        <img src={require("../Images/Minus.png")} width="25px" alt="minus" />
        <div className="RightText">
          <h1>Mega Image SRL</h1>
          <p>Food & Health #343223 - 11 July, 2016</p>
        </div>
        <h2>$112.75</h2>
      </div>
      <div className="RightTextSubGroup">
        <img src={require("../Images/Minus.png")} width="25px" alt="minus" />
        <div className="RightText">
          <h1>ATM DV24</h1>
          <p>#343253 - 09 July, 2016</p>
        </div>
        <h2>$200.00</h2>
      </div>
      <div className="RightTextSubGroup">
        <img src={require("../Images/Minus.png")} width="25px" alt="minus" />
        <div className="RightText">
          <h1>Lukoil Station</h1>
          <p>Gas #343279 - 09 July, 2016</p>
        </div>
        <h2>$190.48</h2>
      </div>
    </div>
  </div>
);

export default RightPane;
