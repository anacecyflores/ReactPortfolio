import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#footer" className="footer__logo">
        To The Top
      </a>

      <ul className="permalinks">
        <li>
          <a href="#about">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
  
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Ana Cecy Flores. All rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
