import React, { useState } from "react";

import "./Carousel.css";

import pageData from "./PageData.js";

import Slide from "./Slide/Slide";
import About from "./Slide/About/About";

import leftarrow from "../../assets/leftArrow.svg";
import rightarrow from "../../assets/rightArrow.svg";

export default function Carousel(props) {
  const n = pageData.length;

  let pageNo = props.pageNo;
  const setPageNo = props.setPageNo;

  const prevSlide = () => {
    setPageNo(pageNo === 0 ? n - 1 : pageNo - 1);
  };
  const nextSlide = () => {
    setPageNo(pageNo === n - 1 ? 0 : pageNo + 1);
  };

  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="allContainer">
      <div className="Carousel_container">
        <img
          src={leftarrow}
          alt=""
          className="arrow left"
          onClick={prevSlide}
        />
        {pageData.map((obj, idx) => {
          return pageNo === idx && <Slide key={idx} obj={obj} idx={idx} setIsAboutOpen={setIsAboutOpen}/>;
        })}
        <img
          src={rightarrow}
          alt=""
          className="arrow right"
          onClick={nextSlide}
        />
      </div>
      <div className="slideButton">
        {pageData.map((ele, idx) => {
          return (
            <div
              key={idx}
              className={`SlideBtn ${pageNo === idx ? "active" : ""}`}
              onClick={() => setPageNo(idx)}
            />
          );
        })}
      </div>
      <div className={`Goleft ${pageNo === 0 ? "indicatoractive" : ""}`}>
        <span>GO LEFT</span>
        <div className="line"></div>
      </div>

      {isAboutOpen && <About setIsAboutOpen={setIsAboutOpen} />}
    </div>
  );
}
