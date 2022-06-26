import React, { useState } from "react";
import AnimatedLogo from "../AnimatedLogo/AnimatedLogo";
import style from "./index.module.css";

function Preloader() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <div
      aria-hidden
      className={style.preloader}
      onAnimationEnd={(e) => {
        if (e.animationName === style.disappear) {
          setLoading(false);
        }
      }}
    >
      <AnimatedLogo />
      <p>Solving problems with code.</p>
    </div>
  ) : (
    <></>
  );
}

export default Preloader;
