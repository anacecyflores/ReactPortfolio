import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/.jpg";
import IMG2 from "../../assets/.jpg";
import IMG3 from "../../assets/.jpg";
import IMG4 from "../../assets/.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Get Higher",
    github: "https://github.com/anacecyflores1/GetHigher",
    demo: "https://get-higher.herokuapp.com/login",
  },
  {
    id: 2,
    image: IMG2,
    title: "Professional Protfolio w/ Bootstrap & Handlebars",
    github: "https://github.com/anacecyflores1/ProfessionalPortfolio",
    demo: "https://cecy-professional-portfolio.herokuapp.com/home",
  },
  {
    id: 3,
    image: IMG3,
    title: "Tech Blog",
    github: "https://github.com/anacecyflores1/TechBlog",
    demo: "https://techno-blogger.herokuapp.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Weather Dashboard",
    github: "https://github.com/anacecyflores1/WeatherDashboard",
    demo: "https://anacecyflores1.github.io/WeatherDashboard/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Check Out My Recent Work</h5>
      <h2>Professional Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
