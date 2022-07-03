import React from "react";
import style from "./index.module.css";

function TorchLight() {
  return (
    <>
      <svg
        width="627"
        className={style.light}
        height="603"
        viewBox="0 0 627 603"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M102.15 324.817L102.917 295.429L82.3701 302.606L82.0181 316.096L102.15 324.817Z"
          fill="#1F1FAD"
        />
        <path
          d="M82.3707 302.584L82.0168 316.148L19.8499 314.526C16.7287 314.445 14.2644 311.848 14.3458 308.727L14.4048 306.467C14.4863 303.345 17.0826 300.881 20.2038 300.962L82.3707 302.584Z"
          fill="#7979E7"
        />
        <path
          d="M102.47 296.028L101.719 324.107L498.449 467.564L463.886 172.86L102.47 296.028Z"
          fill="url(#paint0_radial_562_1279)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_562_1279"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(87.0772 311.676) rotate(-175.527) scale(796.114 635.967)"
          >
            <stop stopColor="#FFFFD6" />
            <stop offset="0.444067" stopColor="#181820" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
}

export default TorchLight;
