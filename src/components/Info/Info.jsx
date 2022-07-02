import React from "react";
import style from "./index.module.css";

function Info({ icon, children, item, setMessage, setAlertActive }) {
  return (
    <div
      className={style.info}
      onClick={() => {
        navigator.clipboard.writeText(children).then(() => {
          setMessage(`${item} has been copied`);
          setAlertActive(true);
        });
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
