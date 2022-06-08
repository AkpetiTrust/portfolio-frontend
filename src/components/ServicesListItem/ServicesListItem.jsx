import React from "react";
import style from "./index.module.css";

function ServicesListItem({ active, title, onClick }) {
  return (
    <li
      onClick={onClick}
      className={`${style.li} ${active ? style.active : ""}`}
    >
      {title}
    </li>
  );
}

export default ServicesListItem;
