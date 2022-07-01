import React from "react";
import style from "./index.module.css";

function Tag({ filter, active, setActiveFilter }) {
  return (
    <span
      className={`${style.tag} ${active ? style.active : ""}`}
      onClick={() => {
        setActiveFilter(filter);
      }}
    >
      {filter}
    </span>
  );
}

export default Tag;
