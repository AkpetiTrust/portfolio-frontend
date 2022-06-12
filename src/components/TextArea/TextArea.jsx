import React from "react";
import style from "./index.module.css";

function TextArea({ name, setValue, label }) {
  return (
    <div className={style.container}>
      <label>{label}</label>
      <textarea
        name={name}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      ></textarea>
    </div>
  );
}

export default TextArea;
