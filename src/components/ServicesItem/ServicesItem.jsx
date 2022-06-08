import React from "react";
import style from "./index.module.css";

function ServicesItem({ active, body, top }) {
  return (
    <li
      style={{ top }}
      className={`${style.item} ${active ? style.active : ""}`}
    >
      {body}
    </li>
  );
}

export default ServicesItem;
