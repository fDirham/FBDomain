import React from "react";
import { LogoTitle } from "./LogoTitle";

export class BaseHeader extends React.Component {
  render() {
    return (
      <div className="header-base  sticky-top">
        <div className="header-content">
          <LogoTitle />
          <div className="header-item">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
