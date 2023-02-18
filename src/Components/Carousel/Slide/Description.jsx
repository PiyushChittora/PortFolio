import React from "react";

import "./Description.css";

export default function Description(props) {
  const obj = props.obj;

  const setIsAboutOpen=props.setIsAboutOpen;
  return (
    <>
      <div className="left_container">
        <div className={`heading_name`}>
          {obj.heading}
          <div
            className="heading_decor"
            id="decor1"
            style={{ backgroundColor: "color" in obj ? obj.color : "#ff4d5a" }}
          ></div>
          <div
            className="heading_decor"
            id="decor2"
            style={{ backgroundColor: "color" in obj ? obj.color : "#ff4d5a" }}
          ></div>
        </div>
        <div className="Descp">{obj.description}</div>
        {"textOnly" in obj ? (
          <div
            className="port"
            style={{ color: "color" in obj ? obj.color : "#ff4d5a" }}
          >
            {obj.text}
          </div>
        ) : "openAbout" in obj ? (
          <button
            onClick={() => setIsAboutOpen(true)}
            className="btn"
            style={{ backgroundColor: "color" in obj ? obj.color : "#ff4d5a" }}
          >
            {obj.text}
          </button>
        ) : (
          <a
            href={obj.link}
            className="btn"
            style={{ backgroundColor: "color" in obj ? obj.color : "#ff4d5a" }}
            target="__blank"
          >
            {obj.text}
          </a>
        )}
      </div>
    </>
  );
}
