import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me1.JPG";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        {/* <h5>Hi,My name is</h5> */}
        <h1>Ana Cecy Flores</h1>
        <h2 className="text-light">Fullstack Developer</h2>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="ME" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
