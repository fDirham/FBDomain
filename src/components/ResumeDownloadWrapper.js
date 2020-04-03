import React from "react";
import { resumeURL as URL } from "../constants/FileConstants";

export class ResumeDownloadWrapper extends React.Component {
  render() {
    return (
      <a style={{ textDecoration: "none" }} href={URL} download>
        {this.props.children}
      </a>
    );
  }
}
