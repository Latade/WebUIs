import React from "react";
import "./App.css";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const WebUiOne = () => (
  <div className="YellowBG">
    <div className="WhiteRec">
      <LeftPane />
      <RightPane />
    </div>
  </div>
);

export default WebUiOne;
