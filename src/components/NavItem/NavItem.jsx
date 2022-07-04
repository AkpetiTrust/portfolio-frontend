import React from "react";
import { Link, useParams } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import style from "./index.module.css";

function NavItem({ icon, name, setActive }) {
  const { component } = useParams();
  const active =
    name.toLowerCase() === component ||
    (name === "Home" && component === undefined) ||
    (name === "Projects" && component === "project");

  return (
    <li className={`${style.item} ${active ? style.active : ""}`}>
      {icon}
      <NavLink setActive={setActive} to={`/dashboard/${name.toLowerCase()}`}>
        {name}
      </NavLink>
    </li>
  );
}

export default NavItem;
