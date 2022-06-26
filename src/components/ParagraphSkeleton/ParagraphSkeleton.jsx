import React from "react";
import style from "./index.module.css";

function ParagraphSkeleton({ color = { h: 240, s: "15%", l: "40%" } }) {
  const { h, s, l } = color;

  return (
    <div
      style={{ "--h": h, "--s": s, "--l": l }}
      className={style.paragraph}
    ></div>
  );
}

export default ParagraphSkeleton;
