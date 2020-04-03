import React from "react";

export class AnnotatedImage extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <img
          src={this.props.imgSrc}
          alt={this.props.imgAlt}
          className={this.props.imgClass}
          style={{ ...this.props.imgStyle }}
        />
        <div
          className={this.props.annotationClass}
          style={{ ...this.props.annotationStyle }}
        >
          {this.props.annotation}
        </div>
      </div>
    );
  }
}
