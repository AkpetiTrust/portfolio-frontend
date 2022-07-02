import React from "react";
import { Robot, Button } from "../../components";
import style from "./index.module.css";

function Error() {
  return (
    <div className={style.error}>
      <svg
        width="66"
        height="44"
        viewBox="0 0 66 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_459_1276)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M57.1742 43.8651L52.2582 11.4343H65.0669V0H31.7844C38.6231 11.7716 50.3693 32.0682 57.1827 43.8651H57.1742Z"
            fill="url(#paint0_linear_459_1276)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.3308 0.118164L37.9962 22.0591L50.6615 44.0001H25.3308H0L12.6654 22.0591L25.3308 0.118164ZM25.3308 18.3405L27.481 22.0591L29.6313 25.7778H25.3392H21.0471L23.1974 22.0591L25.3476 18.3405H25.3308Z"
            fill="url(#paint1_linear_459_1276)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_459_1276"
            x1="23.7062"
            y1="1.38291"
            x2="43.9523"
            y2="31.7562"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7C99DF" />
            <stop offset="1" stop-color="#FFFD77" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_459_1276"
            x1="23.7033"
            y1="1.38302"
            x2="43.9494"
            y2="31.7563"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7C99DF" />
            <stop offset="1" stop-color="#FFFD77" />
          </linearGradient>
          <clipPath id="clip0_459_1276">
            <rect width="65.0601" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className={style.talk}>
        <h1>404</h1>
        <p>
          <b>Uncaught ReferenceError: </b>The page you're looking for is not
          defined.
        </p>
        <Button to={"/"}>GO HOME</Button>
      </div>
      <div className={style.robot}>
        <Robot />
      </div>
    </div>
  );
}

export default Error;
