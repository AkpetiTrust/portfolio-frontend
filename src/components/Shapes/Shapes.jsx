import React from "react";
import style from "./index.module.css";

function Shapes() {
  return (
    <div aria-hidden className={style.shapes}>
      <svg
        width="160"
        height="179"
        viewBox="0 0 160 179"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_7_47)">
          <path
            d="M78.4371 9L92.7909 172.857L10 145.835L78.4371 9Z"
            fill="url(#paint0_linear_7_47)"
          />
          <path
            d="M78.437 9L155.369 137.345L92.7908 172.857L78.437 9Z"
            fill="url(#paint1_linear_7_47)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_7_47"
            x="0.249614"
            y="0.136013"
            width="159.552"
            height="178.039"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-2.6592" dy="-1.7728" />
            <feGaussianBlur stdDeviation="3.54559" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_7_47"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_7_47"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_7_47"
            x1="53.2145"
            y1="9"
            x2="110.112"
            y2="309.813"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFFEA8" />
            <stop offset="1" stopColor="#A0AFFF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_7_47"
            x1="76.2647"
            y1="5.66293"
            x2="158.261"
            y2="191.586"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6C63FF" />
            <stop offset="1" stopColor="#FFFD77" />
            <stop offset="1" stopColor="#D4D09F" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        width="131"
        height="184"
        viewBox="0 0 131 184"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68.5312 30.9987L130.655 67.7183L69.3669 95.9233L0.278335 56.809L68.5312 30.9987Z"
          fill="#5A5A77"
        />
        <path
          d="M0 56.5428L70.2029 95.3911V184L0 135.57V56.5428Z"
          fill="#3B3B4F"
        />
        <path
          d="M130.655 67.7184L70.2027 95.3911V184L130.655 151.355V67.7184Z"
          fill="#4F4F69"
        />
      </svg>
    </div>
  );
}

export default Shapes;
