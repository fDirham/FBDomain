import React from "react";
import { ExperienceSlide as Project } from "../components/ExperienceSlide";
import { Project1Title, Project1Text } from "../constants/TextConstants";
import { AnnotatedImage as Slide } from "../components/AnnotatedImage";
import Pic1 from "../media/Projects/car1.jpg";
import Pic2 from "../media/Projects/car2.jpg";
import Pic3 from "../media/Projects/car3.jpg";

export function Experience(props) {
  return (
    <div>
      <h5>Experience</h5>
      <div id="experience-section" className="experience-base">
        <Project title={Project1Title} text={Project1Text}>
          <Slide imgSrc={Pic1} imgClass="experience-img" imgAlt="idk smth" />
          <Slide imgSrc={Pic2} imgClass="experience-img" imgAlt="idk smth" />
          <Slide imgSrc={Pic3} imgClass="experience-img" imgAlt="idk smth" />
        </Project>
        <Project title={Project1Title} text={Project1Text}>
          <Slide imgSrc={Pic1} imgClass="experience-img" imgAlt="idk smth" />
          <Slide imgSrc={Pic2} imgClass="experience-img" imgAlt="idk smth" />
          <Slide imgSrc={Pic3} imgClass="experience-img" imgAlt="idk smth" />
        </Project>
      </div>
    </div>
  );
}
