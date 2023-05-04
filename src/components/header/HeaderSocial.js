import React from "react";
import {BsLinkedin} from "react-icons/bs"

export default function HeaderSocial() {
    return (
      <div className="header__social">
        <a href="/" target={"_blank"}>
          <BsLinkedin />
        </a>
      </div>
    );
}