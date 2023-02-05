import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import "./header.scss";
import Socials from '../Socials/Socials'

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
    <div className="parent landing-par">
      <div className="container landing-page">
        <div className="header-page">
          <div className="row header-title">
            <h1 ref={headingRef} />
          </div>
          <div className="row header-two">
            <h2>I like to solve problems.</h2>
          </div>
          <div className="row landing-description">
            <p>
              I'm a programmer with a focus on tools and products. I'm currently
              an intern QA Developer at{" "}
              <a href="https://www.thescore.com/">theScore</a> and a Software
              Developer at <a href="https://fibra.com/">Fibra</a>, I have a
              profound interest in full stack development. I am eager to bring
              my expertise and enthusiasm to new projects and continue to grow
              as a programmer.
            </p>
          </div>
          <div className="resume-btn">
            <button class="btn btn-outline-primary btn-lg">Resume</button>
          </div>
          <div className="socials"><Socials /></div>
          
        </div>
      </div>
    </div>
  );
};
export default Header;
