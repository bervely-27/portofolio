import React from "react";
import Skill from "../Skill/Skill";
import Title from "../Title/Title";
import './MySkills.css'
import jsicon from "./images/jsicon.svg";
import tsicon from "./images/tsicon.svg";
import reacticon from "./images/reacticon.svg";
import giticon from "./images/giticon.svg";
import figmaicon from "./images/figmaicon.svg";
const MySkills = () => {
  const skills = [
    { source: jsicon, text: "Javascript" },
    { source: tsicon, text: "Typescript" },
    { source: reacticon, text: "React js" },
    { source: giticon, text: "Git" },
    { source: figmaicon, text: "Figma" },
  ];

  return (
    <section className="myskills">
      <div className="title-position"><Title firstWord={"My"} secondWord={"Skills"}  /></div>

      <div className="boxskill">
       {skills.map(skill=> <Skill key={skill.text} source={skill.source} text={skill.text}/>)}
      </div>
    </section>
  );
};

export default MySkills;
