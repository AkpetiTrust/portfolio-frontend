import React from "react";
import style from "./index.module.css";

function SectionHeading({ children }) {
  return <h2 className={style.section_heading}>{children}</h2>;
}

export default SectionHeading;
