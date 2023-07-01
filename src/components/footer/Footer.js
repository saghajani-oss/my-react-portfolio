import React from "react";
import "./footer.css";
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {IoLogoTwitter} from "react-icons/io"




export default function Footer() {
    return (
      <footer>
        <a href="#" className="footer__logo">
          Samira Aghajani
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.facebook.com/aghajani.samira">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/samira_aghajani66/">
            <FiInstagram />
          </a>
          <a href="https://twitter.com/smaghj">
            <IoLogoTwitter />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Samira Aghajani. All rights reserved.</small>
        </div>
      </footer>
    );
}