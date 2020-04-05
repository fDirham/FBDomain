import React from "react";
import { SimpleCarousel as Carousel } from "./SimpleCarousel";
import { ProfileHeadshot as Headshot } from "./ProfileHeadshot";
import { ResumeDownload as Resume } from "./ResumeDownload";
import { LogoButton as Logo } from "./LogoButton";

import {
  ProfileName,
  Occupation,
  Email,
  Number,
  Location,
} from "../constants/TextConstants";

import Pic1 from "../media/Contact/headshot1.png";
import Pic2 from "../media/Contact/headshot2.png";
import TwitterImg from "../media/Contact/twitter-logo.png";
import FacebookImg from "../media/Contact/facebook-logo.png";
import GithubImg from "../media/Contact/github-logo.png";
import LinkedInImg from "../media/Contact/linkedin-logo.png";
import EmailImg from "../media/Contact/email-logo.png";
import PhoneImg from "../media/Contact/phone-logo.png";
import HomeImg from "../media/Contact/home-logo.png";

export class ProfileCard extends React.Component {
  render() {
    return (
      <div className="profile-base">
        <div className="profile-line-logos profile-top-logos">
          <Logo
            href="https://www.linkedin.com/in/fdirham/"
            imgSrc={LinkedInImg}
            imgClass="logo-button enlarge-hover"
          />
          <Logo
            href="/https://github.com/fDirham"
            imgSrc={GithubImg}
            imgClass="logo-button enlarge-hover"
          />
        </div>
        <Carousel className="carousel-contact" speed={20000} dots={false}>
          <Headshot imgSrc={Pic1} imgAlt="headshot 1" />
          <Headshot imgSrc={Pic2} imgAlt="headshot 2" />
        </Carousel>
        <div className="profile-line-logos profile-bottom-logos">
          <Logo
            href="https://www.facebook.com/fajar.dirham.7"
            imgSrc={FacebookImg}
            imgClass="logo-button enlarge-hover"
          />
          <Logo
            href="https://twitter.com/TweetsFd"
            imgSrc={TwitterImg}
            imgClass="logo-button enlarge-hover"
          />
        </div>
        <div className="profile-lines">
          <div className="profile-identity">
            <div className="profile-name"> {ProfileName} </div>
            <div>{Occupation}</div>
          </div>
          <div className="profile-contact">
            <div className="profile-item">
              {Email}
              <Logo
                imgClass="profile-logos enlarge-hover"
                href={"mailto:" + Email}
                imgSrc={EmailImg}
              />
            </div>
            <div className="profile-item">
              {Number} <Logo imgClass="profile-logos" imgSrc={PhoneImg} />
            </div>
            <div className="profile-item">
              {Location} <Logo imgClass="profile-logos" imgSrc={HomeImg} />
            </div>
          </div>
        </div>
        <Resume className="resume-download profile-resume" />
      </div>
    );
  }
}
