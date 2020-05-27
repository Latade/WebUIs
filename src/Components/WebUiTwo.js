import React from "react";
import Event from "./Event";
import "./WebUiTwo.css";

const WebUiTwo = () => (
  <div className="GreyBG">
    <div className="EventsGroup">
      <h1>Upcoming events this month</h1>
      <div className="AllEvents">
        <Event text="Town hall meeting" date="Oct 5" time="16:00" />
        <Event text="Meet with George" date="Oct 7" time="10:00" />
        <Event text="Vacation!!!" date="Oct 16 - Oct 18" time="All day" />
        <Event text="Visit Grandma" date="Oct 27 - Oct 28" time="16:00" />
      </div>
    </div>
  </div>
);

export default WebUiTwo;
