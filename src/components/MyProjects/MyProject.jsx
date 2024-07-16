import React from 'react'
import Project from '../Project/Project'
import Title from "../Title/Title";
import './MyProject.css'
import project1 from './Images/project1.svg'
import project2 from './Images/project2.svg'
import project3 from './Images/project3.svg'
const MyProject = () => {
const myProjects = [
    { image: project1, num: '01',head:'Crypto Screener Application' ,summary:"I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."},
    { image: project2, num: '02' ,head:'Euphoria - Ecommerce (Apparels) Website Template',summary:"I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."},
    { image: project3, num: '03',head:'Blog Website Template',summary: "I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."},
    
  ];
  return (
    <section className='myprojects'>
       <div className="title-position"><Title firstWord={"My"} secondWord={"Projects"}  /></div>
       <div className='my-projects'>
{myProjects.map(project=>
    <Project key={project.num} image={project.image} num={project.num} head={project.head} summary={project.summary} />
)}
       </div>
    </section>
  )
}

export default MyProject