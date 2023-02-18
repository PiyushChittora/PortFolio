import React from "react";

import "./About.css";

import profile from "../../../../assets/profile.jpg";
import cross from "../../../../assets/cross.svg";
import design from "../../../../assets/design-icon.svg";
import dev from "../../../../assets/dev-icon.svg";
import writing from "../../../../assets/writing.svg";
import skill from "../../../../assets/skills.jpg";

export default function About(props) {
  const setIsAboutOpen = props.setIsAboutOpen;

  return (
    <div className="about_container">
      <button
        className="btn close"
        onClick={() => {
          setIsAboutOpen(false);
        }}
      >
        <img className="cross" src={cross} />
      </button>
      <div className="about">
        <div className="section aboutme">
          <div className="about_nav">
            <div className="header">ABOUT ME</div>
          </div>
          <div className="about_content">
            <div className="Text">
              I'm Piyush Chittora, a developer from Kota, India. Yes, the
              coaching city. Started with JEE prep, now find interests in a
              domain of Technology and Visual Science. Currenty, I'm in my
              prefinal year at IIT Roorkee.
              <br />
              <br /> I like to watch some Anime or web series; I am also a UI/UX
              and Visual Designer.
              <br />
              <br />I started with Designing actually, but eventually found
              intrests in frontend Development and React framework.
            </div>

            <img src={profile} className="profile" />
          </div>
        </div>
        <div className="section passion">
          <div className="about_nav">
            <div className="header">PASSION</div>
          </div>

          <div className="passion_content">
            <div className="passion_card">
              <img src={design} alt="" className="icon" />
              <div className="icon_head">Design</div>
              <div className="passion-text">
                I think design is like a "magic wand". If services and products
                are magic that solves problems, then the role of design is to
                act as a medium for users to master them. We strive every day to
                create a "magic wand" that matches the user.
              </div>
            </div>
            <div className="passion_card">
              <img src={dev} alt="" className="icon" />
              <div className="icon_head">Development</div>
              <div className="passion-text">
                Technology has the power to change the world and the lives of
                individuals, as the saying goes, "Any sufficiently advanced
                technology is indistinguishable from magic." I want to be a
                person who can always catch up with the latest technology and
                respond to changes. I believe that spreading innovation is the
                mission of designers as well as engineers.
              </div>
            </div>
            <div className="passion_card">
              <img src={writing} alt="" className="icon" />
              <div className="icon_head">Writing</div>
              <div className="passion-text">
                I love storytelling content such as novels, movies, and comics.
                Stories can grab people's attention and make things easier to
                understand and remember. I believe that if I can study all kinds
                of narrative patterns and make my own output have a sense of
                story, I will be able to make a big return.
              </div>
            </div>
          </div>
        </div>
        <div className="section skill">
          <div className="about_nav">
            <div className="header">KEY SKILLS</div>
          </div>
          <div className="skill-content">
            <img src={skill} alt="" className="skill-img" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-about">
          Created By Piyush Chittora <br />
          <a href="mailto:piyushchittora35246@gmail.com">
            <span className="email">piyushchittora35246@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
