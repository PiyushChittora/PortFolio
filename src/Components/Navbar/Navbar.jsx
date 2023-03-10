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
          <a href="https://www.linkedin.com/in/piyush-chittora-aba673203/" target="_blank">
            <img src={linkedin} alt="" className="linkedin" />
          </a>
          <a href="https://github.com/PiyushChittora" target="_blank">
            <img src={github} alt="" className="github" />
          </a>
          <a href="https://drive.google.com/file/d/1arLr2pa8f2FNuHa-2m0ri8Ixl_cEMqjE/view?usp=sharing" className="resume" target="_blank">
            <div className="resume-text">My Resume</div>
          </a>
        </div>
      </div>
    </div>
  );
}
