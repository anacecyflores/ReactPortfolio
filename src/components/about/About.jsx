import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5> </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Skills</h5>
              <small>Infrastructure
Microsoft Office (Word, Excel, Powerpoint, Access, Outlook)
Microsoft SharePoint
SQL/MySQL/Postgres
Windows Operating System
Programming Languages and Frameworks
Net
C#
CSS
HTML 5
JavaScript
JQuery
Node.js
React.js</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>About Me</h5>
              <small>
              Currently a History educator looking to continue my learning thorugh Web Development!
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Education</h5>
              <small> Northwestern Fullstack Web Development Bootcamp </small>
            </article>
          </div>
          <p>
           text here
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
