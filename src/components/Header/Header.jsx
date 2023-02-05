import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import './header.scss'

export const Header = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    new Typewriter(headingRef.current, {
      loop: false,
      cursor: "|",
    })
      .pauseFor(300)
      .typeString("hi, I am Aradhya.")
      .start();
  }, []);

  return (
    <div className="container landing-page">
      <div className="header-page">
        <div className="row header-title">
          <h1 ref={headingRef} />
        </div>
        <div className="row header-two">
          <h2>I like to build things</h2>
        </div>
        <div className="row landing-description">
          <p>
            I'm a programmer with a focus on tools and products. I'm currently
            an intern QA Developer at{" "}
            <a href="https://www.thescore.com/">theScore</a> and a Software
            Developer at <a href="https://fibra.com/">Fibra</a>, while finishing
            my undergraduate degree at{" "}
            <a href="https://www.yorku.ca/">York University</a>.
          </p>
        </div>
        <div className="resume-btn">
          <button class="btn btn-outline-primary btn-lg">Resume</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
