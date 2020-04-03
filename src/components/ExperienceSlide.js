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
          <h5>{this.props.title}</h5>
          <h4>{this.props.text}</h4>
          <a>Learn more</a>
        </div>
      </div>
    );
  }
}
