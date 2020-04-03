import React from "react";
import { SimpleCarousel as Carousel } from "../components/SimpleCarousel";
import { AnnotatedImage as Image } from "../components/AnnotatedImage";
import { ProfileCard as Profile } from "../components/ProfileCard";
import Pic1 from "../media/Projects/car1.jpg";
import Pic2 from "../media/Projects/car2.jpg";
import Pic3 from "../media/Projects/car3.jpg";
import {
  Annotation1,
  Annotation2,
  Annotation3
} from "../constants/TextConstants";

export function Contact(props) {
  return (
    <div id="contact-section" className="contact-base">
      <Carousel className="carousel-slideshow" speed={3000} dots={true}>
        <Image
          imgSrc={Pic1}
          annotation={Annotation1}
          imgClass="carousel-image"
          imgAlt="idk smth"
          annotationClass="carousel-annotation"
        />
        <Image
          imgSrc={Pic2}
          annotation={Annotation2}
          imgClass="carousel-image"
          annotationClass="carousel-annotation"
        />
        <Image
          imgSrc={Pic3}
          annotation={Annotation3}
          imgClass="carousel-image"
          annotationClass="carousel-annotation"
        />
      </Carousel>
      <Profile />
    </div>
  );
}
