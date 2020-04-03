import React from "react";
import { LogoTitle } from "./LogoTitle";

export class BaseHeader extends React.Component {
  render() {
    return (
      <div className="header-content sticky-top">
        <LogoTitle />
        <div className="header-item">{this.props.children}</div>
      </div>
    );
  }
}
