import React from "react";
import style from "./index.module.css";

function Input({ label, value, setValue, ...props }) {
  return (
    <div className={style.input_container}>
      <input
        value={value}
        placeholder=" "
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        {...props}
      />
      <label>{label}</label>
    </div>
  );
}

export default Input;
