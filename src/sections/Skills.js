import React from "react";
import { AnnotatedImage as Skill } from "../components/AnnotatedImage";
import Arduino from "../media/Skills/arduino.png";
import Cpp from "../media/Skills/c++.png";
import Java from "../media/Skills/java.png";
import C from "../media/Skills/c.png";
import Csharp from "../media/Skills/csharp.png";
import ReactLogo from "../media/Skills/react.png";
import HTML from "../media/Skills/html.png";
import Unity from "../media/Skills/unity.png";
import ThingSpeak from "../media/Skills/thingspeak.png";
import SolidWorks from "../media/Skills/solidworks.png";
import Python from "../media/Skills/python.jpg";
import NodeJs from "../media/Skills/nodejs.png";
import Assembly from "../media/Skills/assembly.png";

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
                imgSrc={Cpp}
                imgClass="skills-1-img "
                annotation="C++"
                imgAlt="C++ logo"
                annotationClass="skills-annotation "
              />
            </div>
            <div className="skills-23">
              <Skill
                imgSrc={C}
                imgClass="skills-23-img"
                annotation="C"
                imgAlt="C logo"
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
              imgSrc={Arduino}
              imgClass="skills-small"
              annotation="Arduino"
              imgAlt="Arduino logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={Csharp}
              imgClass="skills-small"
              annotation="C#"
              imgAlt="C# logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={ReactLogo}
              imgClass="skills-small"
              annotation="React"
              imgAlt="React logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={NodeJs}
              imgClass="skills-small"
              annotation="NodeJs"
              imgAlt="NodeJs logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={HTML}
              imgClass="skills-small"
              annotation="HTML"
              imgAlt="HTML logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={Python}
              imgClass="skills-small"
              annotation="Python"
              imgAlt="Python logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={Unity}
              imgClass="skills-small"
              annotation="Unity"
              imgAlt="Unity logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={ThingSpeak}
              imgClass="skills-small"
              annotation="ThingSpeak"
              imgAlt="ThingSpeak logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={SolidWorks}
              imgClass="skills-small"
              annotation="SolidWorks"
              imgAlt="SolidWorks logo"
              annotationClass="skills-annotation-small"
            />
            <Skill
              imgSrc={Assembly}
              imgClass="skills-small"
              annotation="Assembly"
              imgAlt="Assembly logo"
              annotationClass="skills-annotation-small"
            />
          </div>
        </div>
      </div>
    );
  }
}
