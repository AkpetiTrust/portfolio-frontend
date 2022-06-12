import React from "react";
import style from "./index.module.css";

function Info({ icon, children }) {
  return (
    <div
      className={style.info}
      onClick={() => {
        navigator.clipboard.writeText(children).then(() => {});
      }}
    >
      {icon}
      <div className={style.value_container}>
        <div className={style.value}>
          <p>{children}</p>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
