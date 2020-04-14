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
import SEE1 from "../media/Projects/see-1.jpg";
import SEE2 from "../media/Projects/see-2.JPG";
import SEE3 from "../media/Projects/see-3.jpg";
import SH1 from "../media/Projects/steady-hands-1.PNG";
import SH2 from "../media/Projects/steady-hands-2.jpeg";
import SayWatt1 from "../media/Projects/saywatt-1.jpg";
import SayWatt2 from "../media/Projects/saywatt-2.jpg";

export function Experience(props) {
  return (
    <div>
      <h5>Experience & Projects</h5>
      <div style={{ height: 40 }}> </div>
      <div id="experience-section" className="experience-base">
        <Project
          title={Project1Title}
          date={Project1Date}
          text={Project1Text}
          href={Project1Href}
        >
          <Slide
            imgSrc={SEE1}
            imgClass="experience-img"
            imgAlt="project image"
          />
          <Slide
            imgSrc={SEE2}
            imgClass="experience-img"
            imgAlt="project image"
          />
          <Slide
            imgSrc={SEE3}
            imgClass="experience-img"
            imgAlt="project image"
          />
        </Project>
        <Project title={Project2Title} date={Project2Date} text={Project2Text}>
          <Slide
            imgSrc={SH1}
            imgClass="experience-img"
            imgAlt="project image"
          />
          <Slide
            imgSrc={SH2}
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
            imgSrc={SayWatt1}
            imgClass="experience-img"
            imgAlt="project image"
          />
          <Slide
            imgSrc={SayWatt2}
            imgClass="experience-img"
            imgAlt="project image"
          />
        </Project>
      </div>
    </div>
  );
}
