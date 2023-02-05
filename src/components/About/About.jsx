import React from "react";
import "./about.scss";

export const About = () => {
  return (
        <section id="about">
      <div className="container about">
        <div className="row"><div className="about-header">
          <h1>/About me</h1>
        </div></div>
        
        <div className="row about-description">
          <p>
            Hello, my name is Aradhya Singh. I have a passion for software
            development . I am currently a QA Analyst at{" "}
            <a href="https://www.thescore.com/">theScore</a> and a Software
            Developer at <a href="https://fibra.io/">Fibra</a>. In my free time,
            I contribute as a backend developer at{" "}
            <a href="https://cshub.ca/">CS HUB</a> at{" "}
            <a href="https://www.yorku.ca/">York University</a>, where I am in
            my third year of studies.
          </p>
        </div>
        <div className="row about-description ">
          <p>Here are few technologies I am tinkering with:</p>
        </div>
        <ul className="skills">
          <li>Java</li>
          <li>Python</li>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Springboot</li>
          <li>MySQL</li>
          <li>REST APIs</li>
          <li>Node.js</li>
        </ul>
      </div>
      </section>
   
  );
};
export default About;
