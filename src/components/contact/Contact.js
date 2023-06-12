import React from "react";
import "./contact.css";
import {MdOutlineMail} from "react-icons/md";
import {FaWhatsapp} from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

export default function Contact() {
    return (
      <section className="contact" id="contact">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__option">
            <article className="contact__option">
              <MdOutlineMail />
              <h4>Email</h4>
              <h5>samira_aghajani66@yahoo.com</h5>
              <a href="mailto:samira_aghajani66@yahoo.com">Send a message</a>
            </article>
            <article className="contact__option">
              <FaWhatsapp />
              <h4>WhatsApp</h4>
              <h5>+98-912 6036480</h5>
              <a href="https://wa.me/+989126036480" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <FiLinkedin />
              <h4>LinkedIn</h4>
              <h5>samira-aghajani</h5>
              <a
                href="https://www.linkedin.com/in/samira-aghajani-058aaa8b/"
                target="_blank"
              >
                View Profile
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTION */}
          <form action="">
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          </form>
        </div>
      </section>
    );
}