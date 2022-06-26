import React from "react";
import style from "./index.module.css";

function AnimatedLogo() {
  return (
    <svg
      width="54"
      height="36"
      viewBox="-27 -18 108 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style.svg}
    >
      <g id="Logo">
        <g>
          <path
            id={style.t}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M46.7787 35.8896L42.7565 9.35531H53.2364V0H26.0052C31.6005 9.63128 41.2111 26.2376 46.7856 35.8896H46.7787Z"
            fill="url(#paint0_linear_426_1276)"
          />
        </g>
        <g>
          <path
            id={style.a}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7252 0.0965881L31.0878 18.0483L41.4504 36H20.7252H0L10.3626 18.0483L20.7252 0.0965881ZM20.7252 15.0057L22.4845 18.0483L24.2438 21.0908H20.7321H17.2204L18.9797 18.0483L20.739 15.0057H20.7252Z"
            fill="url(#paint1_linear_426_1276)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_426_1276"
          x1="19.3958"
          y1="1.13147"
          x2="35.9608"
          y2="25.9824"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7C99DF" />
          <stop offset="1" stopColor="#FFFD77" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_426_1276"
          x1="19.3936"
          y1="1.13147"
          x2="35.9586"
          y2="25.9824"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7C99DF" />
          <stop offset="1" stopColor="#FFFD77" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default AnimatedLogo;
