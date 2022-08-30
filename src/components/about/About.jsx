import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
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
              <FiUsers className="about__icon" />
              <h5> About Me</h5>
              <small> History Teacher changing careers!
              </small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Skills</h5>
              <small>Html, Css, Javascript, Node, MongoDB, REACT, MySQL</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Education</h5>
              <small>Northwestern Fullstack Bootcamp</small>
            </article>
          </div>
          <p>
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
