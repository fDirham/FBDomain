import React from "react";
import { SimpleCarousel as Carousel } from "./SimpleCarousel";
import { ProfileHeadshot as Headshot } from "./ProfileHeadshot";
import Pic1 from "../media/Contact/headshot1.png";
import Pic2 from "../media/Contact/headshot2.png";
import {
  ProfileName,
  Occupation,
  Email,
  Number,
  Location
} from "../constants/TextConstants";
import { ResumeDownload as Resume } from "./ResumeDownload";
import { LogoButton as Logo } from "./LogoButton";
import TwitterImg from "../media/Contact/twitter-logo.jpg";
import FacebookImg from "../media/Contact/facebook-logo.png";
import GithubImg from "../media/Contact/github-logo.jpg";
import LinkedInImg from "../media/Contact/linkedin-logo.jpg";

export class ProfileCard extends React.Component {
  render() {
    return (
      <div className="profile-base">
        <div className="profile-line-logos profile-top-logos">
          <Logo
            href="https://www.linkedin.com/in/fdirham/"
            imgSrc={LinkedInImg}
          />
          <Logo href="/https://github.com/fDirham" imgSrc={GithubImg} />
        </div>
        <Carousel className="carousel-contact" speed={20000} dots={false}>
          <Headshot imgSrc={Pic1} imgAlt="headshot 1" />
          <Headshot imgSrc={Pic2} imgAlt="headshot 2" />
        </Carousel>
        <div className="profile-line-logos profile-bottom-logos">
          <Logo
            href="https://www.facebook.com/fajar.dirham.7"
            imgSrc={FacebookImg}
          />
          <Logo href="https://twitter.com/TweetsFd" imgSrc={TwitterImg} />
        </div>
        <div className="profile-lines">
          <div> {ProfileName} </div>
          <div>{Occupation}</div>
          <div>{Email}</div>
          <div>{Number}</div>
          <div>{Location}</div>
          <Resume className="resume-download profile-resume" />
        </div>
      </div>
    );
  }
}
