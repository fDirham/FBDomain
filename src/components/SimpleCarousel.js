import React from "react";
import Slider from "react-slick";

export class SimpleCarousel extends React.Component {
  render() {
    const settings = {
      accessibility: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      adaptiveHeight: false,
      fade: true
    };
    return (
      <div {...this.props}>
        <Slider
          autoplaySpeed={this.props.speed}
          dots={this.props.dots}
          {...settings}
        >
          {this.props.children}
        </Slider>
      </div>
    );
  }
}
