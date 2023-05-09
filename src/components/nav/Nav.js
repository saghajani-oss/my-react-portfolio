import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

export default function Nav() {
  const [navActive, setNavActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={navActive === "#" ? "active" : ""}
        onClick={() => setNavActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={navActive === "#about" ? "active" : ""}
        on
        onClick={() => setNavActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={navActive === "#experience" ? "active" : ""}
        onClick={() => setNavActive("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={navActive === "#services" ? "active" : ""}
        onClick={() => setNavActive("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={navActive === "#contact" ? "active" : ""}
        onClick={() => setNavActive("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}
