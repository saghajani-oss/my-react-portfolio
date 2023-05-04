import React from "react";
import "./header.css";
import CallToAction from "./CallToAction";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

export default function Header() {
    return (
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Samira Aghajani</h1>
          <h5 className="text-light">FrontEnd Developer</h5>
          <CallToAction />
          <HeaderSocial />
          <div className="me">
            <img src={ME} alt="me" />
            <a href="#contact" className="scroll__down">Scroll Down</a>
          </div>
        </div>
      </header>
    );
}