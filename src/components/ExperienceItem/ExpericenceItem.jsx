import React from "react";
import "./ExperienceItem.css";
const ExpericenceItem = ({ link, legend ,date,description}) => {
  return (
    <div className="experience">
      <div className="heading">
        <div className="logo-experience">
          <img src={link} alt="experience" />
          <p>{legend}</p>
        </div>
        <p>{date}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ExpericenceItem;
