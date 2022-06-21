import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "./index.module.css";

function NavItem({ icon, name }) {
  const { component } = useParams();
  const active =
    name.toLowerCase() === component ||
    (name === "Home" && component === undefined) ||
    (name === "Projects" && component === "project");

  return (
    <li className={`${style.item} ${active ? style.active : ""}`}>
      {icon}
      <Link to={`/dashboard/${name.toLowerCase()}`}>{name}</Link>
    </li>
  );
}

export default NavItem;
