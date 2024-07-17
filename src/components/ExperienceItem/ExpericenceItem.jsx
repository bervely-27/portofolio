import React from "react";
import "./ExperienceItem.css";
const ExpericenceItem = ({ link, legend ,date,description}) => {
  return (
    <div className="experience">
      <div className="heading">
        <div className="logo-experience">
          <img src={link} alt="experience" />
          <span>{legend}</span>
        </div>
        <p>{date}</p>
      </div>
      <span className='description-experience'>{description}</span>
    </div>
  );
};

export default ExpericenceItem;
