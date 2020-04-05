import React from "react";
import { SimpleCarousel as Carousel } from "../components/SimpleCarousel";
import { AnnotatedImage as Image } from "../components/AnnotatedImage";
import { ProfileCard as Profile } from "../components/ProfileCard";
import SEE1 from "../media/Projects/see-1.jpg";
import SEE3 from "../media/Projects/see-3.jpg";
import SH1 from "../media/Projects/steady-hands-2.jpeg";
import {
  Annotation1,
  Annotation2,
  Annotation3,
} from "../constants/TextConstants";

export function Contact(props) {
  return (
    <div id="contact-section" className="contact-base">
      <Carousel className="carousel-slideshow" speed={5000} dots={true}>
        <Image
          imgSrc={SEE1}
          annotation={Annotation1}
          imgClass="carousel-image"
          imgAlt="idk smth"
          annotationClass="carousel-annotation"
        />
        <Image
          imgSrc={SH1}
          annotation={Annotation2}
          imgClass="carousel-image"
          annotationClass="carousel-annotation"
        />
        <Image
          imgSrc={SEE3}
          annotation={Annotation3}
          imgClass="carousel-image"
          annotationClass="carousel-annotation"
        />
      </Carousel>
      <Profile />
    </div>
  );
}
