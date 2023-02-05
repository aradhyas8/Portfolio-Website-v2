import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-container">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">01. Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">02. About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">03. Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">04. Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">05. Contact</a>
        </li>
      </ul>

      {/* hamburger menu for mobile screens */}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">01. Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">02. About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">03. Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">04. Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">05. Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
