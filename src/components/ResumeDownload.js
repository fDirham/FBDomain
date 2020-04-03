import React from "react";
import Logo from "../media/Header/download-logo.png";
import { ResumeDownloadWrapper as Wrapper } from "./ResumeDownloadWrapper";

export class ResumeDownload extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="resume-download" {...this.props}>
          Resume
          <img src={Logo} className="resume-download-logo"></img>
        </div>
      </Wrapper>
    );
  }
}
