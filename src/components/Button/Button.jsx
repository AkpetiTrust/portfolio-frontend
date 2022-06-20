import React from "react";
import style from "./index.module.css";

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className={style.button}>
      {children}
    </button>
  );
}

export default Button;
