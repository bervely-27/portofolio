import React from "react";
import "./MyExperience.css";
import ExpericenceItem from "../ExperienceItem/ExpericenceItem";
import Title from "../Title/Title";
import google from "./Images/google.svg";
import youtube from "./Images/youtube.svg";
import apple from "./Images/apple.svg";
const MyExperience = () => {
  const experiences = [
    {
      link: google,
      legend: "Lead Software Engineer at Google",
      date: "Nov 2019 - Present",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
    {
      link: youtube,
      legend: "Software Engineer at Youtube",
      date: "Jan 2017 - Oct 2019",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    },
    {
      link: apple,
      legend: "Junior Software Engineer at Apple",
      date: "Jan 2016 - Dec 2017",
      description:
        "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
    },
  ];
  return (
    <div className="container-experience">
      <div className="title-position"><Title firstWord={"My"} secondWord={"Experience"}  /></div>
      <div className="experience-flex">
        {experiences.map((experience) => (
          <ExpericenceItem
            key={experience.legend}
            link={experience.link}
            legend={experience.legend}
            date={experience.date}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MyExperience;
