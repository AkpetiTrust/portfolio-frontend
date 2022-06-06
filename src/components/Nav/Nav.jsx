import React from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
          <a href="#">STACK</a>
        </li>
        <li>
          <a href="#">PROJECTS</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
