import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-container">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            01. Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">
            02. About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#experience">
            03. Experience
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects" tabindex="-1" aria-disabled="true">
            04. Projects
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact" tabindex="-1" aria-disabled="true">
            05. Contact
          </a>
        </li>
      </ul>
      
      
    </div>
  );
};

export default Navbar;
