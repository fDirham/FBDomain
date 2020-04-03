import React from "react";

export class ProfileHeadshot extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.imgSrc}
          alt={this.props.imgAlt}
          className="headshot"
        />
      </div>
    );
  }
}
