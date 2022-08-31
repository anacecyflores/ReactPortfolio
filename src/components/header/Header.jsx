import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me1.JPG";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1>Ana Cecy Flores
          </h1> 
        
        <div className="me">
          <img src={ME} alt="ME" />
          <h1> Fullstack Web Developer <HeaderSocial /></h1>
          <CTA />
        </div>
        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
      </div>
    </header>
  );
};

export default Header;
