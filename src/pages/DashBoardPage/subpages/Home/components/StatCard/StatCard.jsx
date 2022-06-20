import React from "react";
import style from "./index.module.css";

function StatCard({ children, number }) {
  number = number.toString().length === 1 ? "0" + number : number;

  return (
    <div className={style.card}>
      <p className={style.number}>{number}</p>
      <p>{children}</p>
    </div>
  );
}

export default StatCard;
