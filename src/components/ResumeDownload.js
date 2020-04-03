import React from "react";
import Logo from "../media/Header/download-logo.png";
import { resumeURL as URL } from "../constants/FileConstants";

export class ResumeDownload extends React.Component {
  render() {
    return (
      <a style={{ textDecoration: "none" }} href={URL} download>
        <div className="resume-download" {...this.props}>
          Resume
          <img src={Logo} className="resume-download-logo"></img>
        </div>
      </a>
    );
  }
}
