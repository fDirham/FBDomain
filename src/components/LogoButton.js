import React from "react";

export class LogoButton extends React.Component {
  render() {
    return (
      <a href={this.props.href} target="_blank">
        <img
          src={this.props.imgSrc}
          alt={this.props.imgAlt}
          className="logo-button"
        />
      </a>
    );
  }
}
