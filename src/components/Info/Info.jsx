import React from "react";
import style from "./index.module.css";

function Info({ icon, children }) {
  return (
    <div className={style.info}>
      {icon}
      <div className={style.value}>
        <p>{children}</p>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Info;
