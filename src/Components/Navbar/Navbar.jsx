import React from "react";
import "./Navbar.css";

import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/Github.svg";
export default function Navbar() {
  return (
    <div className="navbar_container">
      <div className="nav">
        <a href="/" className="name">Piyush Chittora</a>
        <div className="connect">
          <a href="https://www.linkedin.com/in/piyush-chittora-aba673203/">
            <img src={linkedin} alt="" className="linkedin" />
          </a>
          <a href="https://github.com/PiyushChittora">
            <img src={github} alt="" className="github" />
          </a>
          <a href="" className="resume">
            <div className="resume-text">My Resume</div>
          </a>
        </div>
      </div>
    </div>
  );
}
