import React from "react";
import { AnnotatedImage as Skill } from "../components/AnnotatedImage";
import Arduino from "../media/Skills/arduino.jpg";
import Cpp from "../media/Skills/c++.png";
import Java from "../media/Skills/java.jpg";

export class Skills extends React.Component {
  render() {
    return (
      <div>
        <h5>Skills & Technologies</h5>
        <div id="skills-section" className="skills-base">
          <div className="skills-emphasis">
            <div className="skills-1">
              {" "}
              <Skill
                imgSrc={Arduino}
                imgClass="skills-1-img"
                annotation="Arduino"
                imgAlt="Arduino logo"
                annotationClass="skills-annotation"
              />
            </div>
            <div className="skills-23">
              <Skill
                imgSrc={Cpp}
                imgClass="skills-23-img"
                annotation="C++"
                imgAlt="C++ logo"
                annotationClass="skills-annotation"
              />
              <Skill
                imgSrc={Java}
                imgClass="skills-23-img"
                annotation="Java"
                imgAlt="Java logo"
                annotationClass="skills-annotation"
              />
            </div>
          </div>
          <div className="skills-collection">
            <Skill
              imgSrc={Java}
              imgClass="skills-small"
              annotation="Java"
              imgAlt="Java logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={Java}
              imgClass="skills-small"
              annotation="Java"
              imgAlt="Java logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={Java}
              imgClass="skills-small"
              annotation="Java"
              imgAlt="Java logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={Java}
              imgClass="skills-small"
              annotation="Java"
              imgAlt="Java logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={Java}
              imgClass="skills-small"
              annotation="Java"
              imgAlt="Java logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={Java}
              imgClass="skills-small"
              annotation="Java"
              imgAlt="Java logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={Java}
              imgClass="skills-small"
              annotation="Java"
              imgAlt="Java logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={Java}
              imgClass="skills-small"
              annotation="Java"
              imgAlt="Java logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={Java}
              imgClass="skills-small"
              annotation="Java"
              imgAlt="Java logo"
              annotationClass="skills-annotation-small"
            />
          </div>
        </div>
      </div>
    );
  }
}
