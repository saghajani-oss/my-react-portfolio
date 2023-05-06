import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import {FaGithub} from "react-icons/fa"

export default function HeaderSocial() {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/samira-aghajani-058aaa8b/"
        target={"_blank"}
      >
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/samira_aghajani66/" target={"_blank"}>
        <FaInstagram />
      </a>
      <a href="https://github.com/saghajani-oss" target={"_blank"}>
        <FaGithub />
      </a>
    </div>
  );
}
