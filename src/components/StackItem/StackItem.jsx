import React from "react";
import style from "./index.module.css";

function StackItem({ stackName, image, size, position: { x, y }, fontSize }) {
  return (
    <div
      className={style.item}
      style={{
        width: size + "px",
        height: size + "px",
        left: x + "px",
        top: y + "px",
        fontSize: fontSize + "px",
      }}
    >
      <p>{stackName}</p>
      <figure>{image}</figure>
    </div>
  );
}

export default StackItem;
