import React from "react";
import style from "./index.module.css";

function Toggle({ setActive, active }) {
  return (
    <span
      className={`${style.toggle} ${active ? style.active : ""}`}
      onClick={() => {
        setActive((prevValue) => !prevValue);
      }}
      aria-hidden
    >
      {" "}
      <span></span>
    </span>
  );
}

export default Toggle;
