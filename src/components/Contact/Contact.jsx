import React from "react";
import './contact.scss'

export const Contact = () => {
  return (
    <section id="contact">
    <div className="parent contact-father">
    <div className="container contact">
    <div className="contact-header">
          <h1>/Contact</h1>
        </div>
        <div className="contact-description">
      <div className="row">
        <div className="title">
          <h2>What's next?</h2>
        </div>
      </div>
      <div className="row">
        <div className="get-touch">
          <p>Get in Touch</p>
        </div>
      </div>
      <div className="row">
        <div className="statement">
          <p>I will be glad to contribute to any project, Let's build something amazing together!</p>
        </div>
      </div>
      <div className="row">
        <div className="hello-button">
          <button className="btn btn-outline-primary">Say Hello.</button>
        </div>
      </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default Contact;
