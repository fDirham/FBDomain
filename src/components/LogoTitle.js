import React from "react";
import Logo from "../media/Header/fbd-logo.png";
import { animateScroll as Scroll } from "react-scroll";
import * as Const from "../constants/ScrollConstants";

export function LogoTitle(props) {
  return (
    <div
      onClick={() => window.location.reload()}
      className="header-item clickable enlarge-hover"
    >
      <img src={Logo} className="header-logo" />
      <h1>FBD</h1>
    </div>
  );
}
