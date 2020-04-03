import React from "react";
import {
  AboutName as Name,
  AboutOccupation as Occupation,
  AboutWorks as Works,
  AboutInterests as Interests
} from "../constants/TextConstants";

export function About(props) {
  return (
    <div id="about-section" className="about-container">
      {Name} {Occupation}
      {Works} {Interests}
    </div>
  );
}
