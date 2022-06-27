import React from "react";
import style from "./index.module.css";

function Input({ value, setValue, backgroundColor, ...props }) {
  return (
    <input
      className={style.input}
      value={value}
      onChange={(e) => {
        setValue(e.currentTarget.value);
      }}
      style={{ backgroundColor }}
      {...props}
    />
  );
}

export default Input;
