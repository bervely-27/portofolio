import React from "react";
import "./Hero.css";
import Media from "../Media/Media";
import social1 from "./images/social1.svg"
import social2 from './images/Social2.svg'
import social3 from './images/Social3.svg'
import social4 from './images/Social4.svg'
import Banner from './images/Banner.svg'
const Hero = () => {


  return (
    <section className='hero'>
      <div className="hero-wrapper">
      <div className="title" >
            <h6>
                Hello I’am{" "}
                <span className="bold">
                    Beverly.
                    <br />
                    Frontend
                </span>{" "}
                <span className="developer">Developer</span> <br />
                Based In <span className="bold">BENIN.</span>
           </h6>
            <p>
                I'm DOSSOU Beverly Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to specimen book.
            </p>
            <div className="socialbtn">
            <Media 
           image={social1}
          
            />
            <Media 
           
           image={social2}
            />
            <Media 
           
           image={social3}
            />
            <Media 
          
          image={social4}
            />
            </div>
            
      </div>
      <div className="imghero">
        <img src={Banner} alt="computer"/>
      </div>
      </div>

     
    </section>
  );
};

export default Hero;
