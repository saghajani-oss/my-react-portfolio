import React from "react";
import "./services.css";
import {BiCheck} from "react-icons/bi"

export default function Services() {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Write the code that makes a website</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Create or implement designs demanded by a client or created by
                  a design team
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  knowledge of a variety of programming languages, including
                  HTML, CSS and JavaScript 
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  knowledge of JavaScript frameworks (React) and libraries
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    );
}