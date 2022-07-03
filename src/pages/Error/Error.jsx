import React from "react";
import { Link } from "react-router-dom";
import { Robot, Button, TorchLight } from "../../components";
import style from "./index.module.css";

function Error() {
  return (
    <div className={style.error}>
      <Link to={"/"} className={style.logo}>
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
              <stop stopColor="#7C99DF" />
              <stop offset="1" stopColor="#FFFD77" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_459_1276"
              x1="23.7033"
              y1="1.38302"
              x2="43.9494"
              y2="31.7563"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7C99DF" />
              <stop offset="1" stopColor="#FFFD77" />
            </linearGradient>
            <clipPath id="clip0_459_1276">
              <rect width="65.0601" height="44" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <TorchLight />
      <div className={style.talk}>
        <h1>404</h1>
        <p>
          <b>Uncaught ReferenceError: </b>The page you're looking for is not
          defined.
        </p>
        <Button to={"/"} isLink>
          GO HOME
        </Button>
      </div>
      <div className={style.robot}>
        <Robot />
      </div>

      <svg
        width={368}
        height={224}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={style.circle}
      >
        <g filter="url(#a)">
          <mask
            id="c"
            style={{
              maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={101}
            y={51}
            width={255}
            height={173}
          >
            <path
              d="M101.062 211.943V90.953l254.677-39.21v171.402l-254.677-11.202Z"
              fill="url(#b)"
            />
          </mask>
          <g filter="url(#d)" mask="url(#c)">
            <path
              d="M102.606 182.815v-56.014l256.22-32.487v104.185l-256.22-15.684Z"
              fill="url(#e)"
            />
          </g>
        </g>
        <circle cx={101.062} cy={101.062} r={101.062} fill="url(#f)" />
        <circle cx={101.062} cy={101.062} r={101.062} fill="url(#g)" />
        <defs>
          <linearGradient
            id="b"
            x1={101.062}
            y1={164.891}
            x2={398.929}
            y2={160.638}
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset={0.516} stopOpacity={0.7} />
            <stop offset={1} stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="e"
            x1={102.606}
            y1={161.53}
            x2={358.154}
            y2={142.441}
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset={1} stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="f"
            x1={101.062}
            y1={0}
            x2={175.752}
            y2={234.994}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#252532" />
            <stop offset={1} stopColor="#181820" />
          </linearGradient>
          <filter
            id="a"
            x={90.478}
            y={82.186}
            width={277.389}
            height={128.441}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={6.064}
              result="effect1_foregroundBlur_562_1274"
            />
          </filter>
          <filter
            id="d"
            x={53.659}
            y={45.367}
            width={354.114}
            height={202.079}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={24.473}
              result="effect1_foregroundBlur_562_1274"
            />
          </filter>
          <radialGradient
            id="g"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(51.12 -47.5 103.727) scale(131.381)"
          >
            <stop stopColor="#fff" />
            <stop offset={1} stopColor="#fff" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Error;
