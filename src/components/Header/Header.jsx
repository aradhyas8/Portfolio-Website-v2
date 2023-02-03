import React from "react";
import "./header.scss";

export const Header = () => {
  return (
    <div className="parent">
      <div className="container landing-page">
        <div className="header-page">
          <div className="row">
            <h1>hi, I am Aradhya.</h1>
          </div>
          <div className="row">
            <h4>I like to build things</h4>
          </div>
          <div className="row">
            <p>
              I am a programmer with a focus on creating tools and products.
              Currently, I am interning as a QA Developer at theScore and as a
              Software Engineer at Fibra, and completing my Undergrad at York
              University. Download Resume
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
