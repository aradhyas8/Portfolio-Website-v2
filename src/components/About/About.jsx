import React from "react";
import "./about.scss";

export const About = () => {
  return (
    <div className="parent">
      <div className="container about">
        <div className="about-header">/About me</div>
        <div className="row about-description">
          <p>
            My name is Aradhya Singh. I love building and automating things.
            Working as a Software Engineer Intern at Fibra and QA Developer
            Intern at theScore has allowed me to explore more technologies and
            learn things. I have worked in the areas of backend and automation.
            I have always been intrigued by AI and am learning to build things
            around it.
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
    </div>
  );
};
export default About;
