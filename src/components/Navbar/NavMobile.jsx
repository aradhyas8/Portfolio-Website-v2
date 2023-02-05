import React from "react";
import { useState } from "react";
import "./navmobile.scss";
import { RiHomeLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosGitNetwork } from "react-icons/io";
import { MdWorkOutline } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";


const NavMobile = () => {

    
const [activeNavbar, setActiveNavbar] = useState('#')
  return (
    <navbar>
      <a
        href="#"
        onClick={() => setActiveNavbar("#")}
        className={activeNavbar === "#" ? "active" : ""}
      >
        <RiHomeLine />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNavbar("#about")}
        className={activeNavbar === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNavbar("#experience")}
        className={activeNavbar === "#experience" ? "active" : ""}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNavbar("#portfolio")}
        className={activeNavbar === "#portfolio" ? "active" : ""}
      >
        <IoIosGitNetwork />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNavbar("#contact")}
        className={activeNavbar === "#contact" ? "active" : ""}
      >
        <BiMessageAltDetail />
      </a>
    </navbar>
  );
};

export default NavMobile;
