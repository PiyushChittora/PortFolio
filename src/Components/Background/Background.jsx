import React from "react";
import { useState, useEffect } from "react";

import "./Background.css";

import clouds from "../../assets/clouds.png";
import island1 from "../../assets/island1.png";
import island2 from "../../assets/island2.png";
import bgm from "../../assets/bgm.png";
import moon from "../../assets/moon.svg";
import stars from "../../assets/stars.png";

export default function Background(props) {
  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX / 200, y: ev.clientY / 200 });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const pageNo=props.pageNo;

  return (
    <div className="background">
      <img
        src={island1}
        className="island1"
        style={{ left: -1 * MousePosition.x, top: -2 * MousePosition.y }}
      />
      <img
        src={island2}
        className="island2"
        style={{ left: -2 * MousePosition.x, top: -4 * MousePosition.y }}
      />
      <img
        src={clouds}
        className="clouds"
        style={{ left: -6 * MousePosition.x, top: -12 * MousePosition.y }}
      />
      <img src={bgm} className="bgm" />
      <img
        src={moon}
        className={`moon ${pageNo===0&& "atHome"}`}
        style={{ left: -2 * MousePosition.x, top: -4 * MousePosition.y }}
      />
      <img
        src={stars}
        className="stars"
        style={{ left: -1 * MousePosition.x, top: -2 * MousePosition.y }}
      />
    </div>
  );
}
