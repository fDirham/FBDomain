import React from "react";
import { ExperienceSlide as Project } from "../components/ExperienceSlide";
import {
  Project1Title,
  Project1Date,
  Project1Text,
  Project1Href,
  Project2Title,
  Project2Date,
  Project2Text,
  Project3Title,
  Project3Date,
  Project3Text,
  Project3Href,
} from "../constants/TextConstants";
import { AnnotatedImage as Slide } from "../components/AnnotatedImage";
import Pic1 from "../media/Projects/car1.jpg";
import Pic2 from "../media/Projects/car2.jpg";
import Pic3 from "../media/Projects/car3.jpg";

export function Experience(props) {
  return (
    <div>
      <h5>Experience & Projects</h5>
      <div id="experience-section" className="experience-base">
        <Project
          title={Project1Title}
          date={Project1Date}
          text={Project1Text}
          href={Project1Href}
        >
          <Slide
            imgSrc={Pic1}
            imgClass="experience-img"
            imgAlt="project image"
          />
          <Slide
            imgSrc={Pic2}
            imgClass="experience-img"
            imgAlt="project image"
          />
          <Slide
            imgSrc={Pic3}
            imgClass="experience-img"
            imgAlt="project image"
          />
        </Project>
        <Project title={Project2Title} date={Project2Date} text={Project2Text}>
          <Slide
            imgSrc={Pic1}
            imgClass="experience-img"
            imgAlt="project image"
          />
          <Slide
            imgSrc={Pic2}
            imgClass="experience-img"
            imgAlt="project image"
          />
          <Slide
            imgSrc={Pic3}
            imgClass="experience-img"
            imgAlt="project image"
          />
        </Project>
        <Project
          title={Project3Title}
          date={Project3Date}
          text={Project3Text}
          href={Project3Href}
        >
          <Slide
            imgSrc={Pic1}
            imgClass="experience-img"
            imgAlt="project image"
          />
          <Slide
            imgSrc={Pic2}
            imgClass="experience-img"
            imgAlt="project image"
          />
          <Slide
            imgSrc={Pic3}
            imgClass="experience-img"
            imgAlt="project image"
          />
        </Project>
      </div>
    </div>
  );
}
