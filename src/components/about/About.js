import React from "react";
import "./about.css";
import ME from "../../assets/Samira-me.jpg";
import { FaAward } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about" className="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5>Clients</h5>
              <small>43+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            After graduating from university as an IT engineer ten years ago, I
            started working as a network expert. When I made the decision to
            create my personal website, I understood my great interest in this
            field. To that end, I started learning Word Press. After completing
            my first project, I wanted to improve my skills as a front-end
            developer. So I continued my learning journey by taking online
            courses on Seven Learn, YouTube, She Codes, Scrimba and so on. After
            a while I changed my job to apply what I learned as a front-end
            developer to real projects. Thanks to the new job, I was able to
            continue this learning journey. My keen interest in programming has
            always kept me on the right track.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
