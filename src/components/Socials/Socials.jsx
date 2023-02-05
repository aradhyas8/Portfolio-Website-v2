import React from "react";
import "./socials.scss";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="socials">
      <ul>
        <li>
        <a href="https://github.com/aradhyas8" target="_blank">
            <FiGithub />
          </a>
        </li>
        <li>
        <a href="https://linkedin.com/aradhyas8" target="_blank">
            <AiOutlineLinkedin />
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Socials;


