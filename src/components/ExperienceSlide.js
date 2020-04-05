import React from "react";
import { SimpleCarousel as Carousel } from "../components/SimpleCarousel";

export class ExperienceSlide extends React.Component {
  render() {
    return (
      <div className="experience-slide">
        <Carousel className="experience-carousel" speed={3000} dots={true}>
          {this.props.children}
        </Carousel>
        <div className="experience-text">
          <h4>{this.props.title}</h4>
          <h2>{this.props.date}</h2>
          <h3>{this.props.text}</h3>
          <a
            href={this.props.href}
            className="experience-redirect"
            target="_blank"
          >
            {this.props.href ? "Learn more" : ""}
          </a>
        </div>
      </div>
    );
  }
}
