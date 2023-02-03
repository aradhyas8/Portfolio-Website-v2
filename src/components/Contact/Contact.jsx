import React from "react";
import './contact.scss'

export const Contact = () => {
  return (
    <div className="parent contact-father">
    <div className="container contact">
      <div className="row">
        <div className="title">
          <h2>What's next?</h2>
        </div>
      </div>
      <div className="row">
        <div className="get-touch">
          <p>Get In Touch</p>
        </div>
      </div>
      <div className="row">
        <div className="statement">
          <p>I will be glad to contribute to any project, Let's build something amazing together!</p>
        </div>
      </div>
      <div className="row">
        <div className="hello-button">
          <button>Say Hello.</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
