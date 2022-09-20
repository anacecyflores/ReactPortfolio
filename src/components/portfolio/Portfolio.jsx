import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/GetHigher.png";
import IMG2 from "../../assets/search.png";
import IMG3 from "../../assets/home.png";
import IMG4 from "../../assets/dashboard.png";
import IMG5 from "../../assets/portfolio.png";

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
    title: "World View",
    github: "https://github.com/anacecyflores1/WorldView",
    demo: "https://my-world-view.herokuapp.com/",
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
  {
    id: 5,
    image: IMG5,
    title: "Professional Portfolio w/ Bootstrap & Handlebars",
    github: "https://github.com/anacecyflores1/ProfessionalPortfolio",
    demo: "https://cecy-professional-portfolio.herokuapp.com/home",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> </h5>
      <h1>Professional Portfolio</h1> 

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
                  App Link
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
