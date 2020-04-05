import React from "react";
import {
  AboutName as Name,
  AboutWelcome as Welcome,
  AboutOccupation as Occupation,
  AboutWorks as Works,
  AboutInterests as Interests
} from "../constants/TextConstants";

export function About(props) {
  return (
    <div id="about-section" className="about-container">
      <div className="about-left">
        <div className="about-name">{Name}</div>{" "}
        <div className="about-welcome">{Welcome}</div>
      </div>
      <div className="about-right">
        <div>{Occupation} </div>
        <div>{Works} </div>
        <div>{Interests}</div>
      </div>
    </div>
  );
}
