import React from "react";
import "./WebUiTwo.css";

const Event = (props) => (
  <div className="Rectangle">
    <div className="GreenRec" />
    <div className="Text">
      <h2>{props.text}</h2>
      <p>{props.date}</p>
    </div>
    <a href="/" className="Button">
      {props.time}
    </a>
  </div>
);

export default Event;
