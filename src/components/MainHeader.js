import React from "react";
import { Link as Scroll } from "react-scroll";
import { BaseHeader } from "./BaseHeader";
import { ResumeDownload as Resume } from "./ResumeDownload";
import * as Const from "../constants/ScrollConstants";
export function MainHeader(props) {
  return (
    <BaseHeader>
      <Scroll
        to="about-section"
        smooth={true}
        hashSpy={true}
        offset={Const.scrollOffset}
        duration={Const.scrollDuration}
        className="clickable"
      >
        <h6>About</h6>
      </Scroll>

      <Scroll
        to="contact-section"
        smooth={true}
        hashSpy={true}
        offset={Const.scrollOffset}
        duration={Const.scrollDuration}
        className="clickable"
      >
        <h6>Contact</h6>
      </Scroll>

      <Scroll
        to="skills-section"
        smooth={true}
        hashSpy={true}
        offset={Const.scrollOffset}
        duration={Const.scrollDuration}
        className="clickable"
      >
        <h6>Skills</h6>
      </Scroll>

      <Scroll
        to="experience-section"
        smooth={true}
        hashSpy={true}
        offset={Const.scrollOffset}
        duration={Const.scrollDuration}
        className="clickable"
      >
        <h6>Experience</h6>
      </Scroll>
      <div className="download-divider"></div>
      <Resume />
      <div className="side-divider"></div>
    </BaseHeader>
  );
}
