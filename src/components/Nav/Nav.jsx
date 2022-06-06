import React from "react";
import style from "./index.module.css";

function Nav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
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
