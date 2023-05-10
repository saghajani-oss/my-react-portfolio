import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
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
            Nach meinem Universitätsabschluss als IT-Ingenieur vor zehn Jahren
            habe ich begonnen, als Netzwerkexperte zu arbeiten. Als ich
            Entscheidung traf, meine persönliche Website zu gestalten, verstand
            ich meine große Interese in diesem Bereich. Zu diesem Zweck begann
            ich, Word Press zu lernen. Nachdem ich mein erstes Projekt
            abgeschlossen hatte, wollte ich meine Fähigkeiten als
            Front-End-Entwickler verbessern. Daher setzte ich meine Lernreise
            fort, indem ich Online-Kurse auf Seven Learn, YouTube, She Codes,
            Scrimba und so weiter belegte. Nach einer Weile wechselte ich meinen
            Job, um das, was ich als Front-End-Entwickler gelernt hatte, in
            realen Projekten umzusetzen. Dank des neuen Arbeitsplatzes konnte
            ich diese Lernreise fortsetzen. Mein ausgeprägtes Interesse am
            Programmieren hat mich immer auf die laufenden Richtung gehalten.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
