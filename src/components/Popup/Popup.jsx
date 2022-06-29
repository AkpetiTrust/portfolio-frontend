import React from "react";
import style from "./index.module.css";

function Popup({ setPopupActive, children }) {
  return (
    <div
      className={style.popup}
      onClick={(e) => {
        if (!e.target.className) return;

        if (e.target.className.includes("Popup")) {
          setPopupActive(false);
        }
      }}
    >
      {children}
    </div>
  );
}

export default Popup;
