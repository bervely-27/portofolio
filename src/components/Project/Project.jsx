import React from "react";
import "./Project.css";
import read from "./Images/read.svg";
const Project = ({ image,num,head,summary }) => {
  return (
    <section className="project">
      <div>
        <img src={image} alt="project" />
      </div>
      <div className="project-text">
        <span className="num">{num}</span>
        <span className="headnum">{head}</span>
        <p>{summary}</p>
        <div>
          <img src={read} alt="read" />
        </div>
      </div>
    </section>
  );
};

export default Project;
