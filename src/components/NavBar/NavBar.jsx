import React from "react";
import logo1 from "./image/logo1.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineFileDownload } from "react-icons/md"
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav>
      <section className="navbar">
      <div className="logonav">
        <img src={logo1} alt="logo" />
        <p>Personal</p>
      </div>

      <div className="linksnav">
        <div className="hamburger">
          <GiHamburgerMenu />
        </div>
        <div className="cross">
          <RxCross2 />
        </div>
        <ul className="links">
          <li className="link">
            <a href="#aboutme">About me</a>
          </li>
          <li className="link">
            <a href="#skills">Skills</a>
          </li>
          <li className="link">
            <a href="#project">Project</a>
          </li>
          <li className="link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="button">
        <button>Resume</button>
        <div className="download"><MdOutlineFileDownload /></div>
      </div>
      </section>
      
    </nav>
  );
};

export default NavBar;
