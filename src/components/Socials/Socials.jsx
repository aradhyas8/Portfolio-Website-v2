import React from "react";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://linkedin.com/aradhyas8" target="_blank">
        <FiLinkedin />
      </a>
      <a href="https://github.com/aradhyas8" target="_blank">
        <FiGithub />
      </a>
      <a href="mailto:aradhya@my.yorku.ca">
        <AiOutlineMail />
      </a>
    </div>
  );
};

export default Socials;
