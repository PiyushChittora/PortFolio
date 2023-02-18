import React, { useState } from "react";
import Description from "./Description";
import "./Slide.css";

import linkedin from "../../../assets/linkedin.svg";
import github from "../../../assets/Github.svg";
import gmail from "../../../assets/gmail.svg";
import phone from "../../../assets/phone.svg";
import dribble from "../../../assets/dribble.svg";
import medium from "../../../assets/medium.svg";

export default function Slide(props) {
  const obj = props.obj;
  const idx = props.idx;

  const contactLinks = [
    {
      text: "Gmail",
      img: gmail,
      link: "mailto:piyushchittora35246@gmail.com",
    },
    {
      text: "LinkedIn",
      img: linkedin,
      link: "https://www.linkedin.com/in/piyush-chittora-aba673203/",
    },
    {
      text: "Github",
      img: github,
      link: "https://github.com/PiyushChittora",
    },
    {
      text: "+91 93518 58874",
      img: phone,
      link: "tel: +91 93518 58874",
    },
    {
      text: "Dribble",
      img: dribble,
      link: "https://dribbble.com/Piyush_c",
    },
    {
      text: "Medium",
      img: medium,
      link: "https://medium.com/@piyush_c",
    },
  ];
  return (
    <div className="Home_container">
      <Description obj={obj} setIsAboutOpen={props.setIsAboutOpen}/>
      <div className="right_container">
        <div className="box blue"></div>
        <div
          className="box red"
          style={{ backgroundColor: "color" in obj ? obj.color : "#ff4d5a" }}
        ></div>
        {"connect" in obj ? (
          <div className="contact_container">
            <div className="contact_subcontainer">
              {contactLinks.map((data, indx) => {
                return (
                  <a
                    key={indx}
                    href={data.link}
                    className={`contact contact-${data.text}`}
                    target="__blank"
                  >
                    <img src={data.img} alt="" /> {data.text}
                  </a>
                );
              })}
            </div>
          </div>
        ) : "isFrame" in obj ? (
          <div className="wrap">
            <iframe
              src="https://piyushchittora.github.io/npm-packages-demo/"
              className="frame"
              loading="lazy"
            ></iframe>
          </div>
        ) : (
          <img src={obj.image} alt="loading" />
        )}
      </div>
      {idx !== 0 && (
        <div className="idx-container responsive">
          <div className="idx-text">0{idx}</div>
        </div>
      )}
    </div>
  );
}
