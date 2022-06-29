import React from "react";
import style from "./index.module.css";

function Table({ children, responsive = true }) {
  return (
    <div className={`${responsive ? style.responsive : ""}`}>
      <table className={style.table}>{children}</table>
    </div>
  );
}

export default Table;
