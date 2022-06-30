import React, { useState, useEffect } from "react";
import { useInterval } from "../../utils/hooks";
import SliderItem from "../SliderItem/SliderItem";
import style from "./index.module.css";

function Slider() {
  const [sliderItems, setSliderItems] = useState([
    "DESIGNER",
    "ENGINEER",
    "DEVELOPER",
    "STUDENT",
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [rotateAngle, setRotateAngle] = useState(0);
  const [delay, setDelay] = useState(3000);

  const getNewAngle = (prevAngle) => {
    const prevIndex = (Math.abs(prevAngle) / 90) % 4;
    let offset = activeIndex - prevIndex;
    if (offset < 0) {
      offset += sliderItems.length;
    }

    const offsetToDistance = {
      0: 0,
      1: -90,
      2: -180,
      3: 90,
    };

    let distance = offsetToDistance[offset];

    let newAngle = prevAngle + distance;

    return newAngle;
  };

  useEffect(() => {
    setRotateAngle((prevAngle) => getNewAngle(prevAngle));
  }, [activeIndex]);

  useInterval(() => {
    setActiveIndex((prevValue) => (prevValue + 1) % sliderItems.length);
  }, delay);

  return (
    <div className={style.slider}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={267.318}
        height={180.786}
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        viewBox="0 0 771.5 521.8"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="a_1"
            gradientUnits="userSpaceOnUse"
            x1={281.1}
            y1={16.4}
            x2={521.2}
            y2={376.6}
          >
            <stop
              offset={0}
              style={{
                stopOpacity: 1,
                stopColor: "#7c99df",
              }}
            />
            <stop
              offset={1}
              style={{
                stopOpacity: 1,
                stopColor: "#fffd77",
              }}
            />
          </linearGradient>
          <linearGradient
            id="b_1"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#a_1"
            x1={281.1}
            y1={16.4}
            x2={521.2}
            y2={376.6}
          />
        </defs>
        <path
          d="m678 520.2-58.3-384.6h151.9V0H376.9C458 139.6 597.3 380.3 678.1 520.2z"
          style={{
            fill: "url(#b_1)",
          }}
        />
        <path
          d="m300.4 1.4 150.2 260.2 150.2 260.2H0l150.2-260.2L300.4 1.4zm0 216.1 25.5 44.1 25.5 44.1H249.6l25.5-44.1 25.5-44.1z"
          style={{
            fill: "url(#a_1)",
          }}
        />
      </svg>
      <ul
        style={{
          transform: `rotate(${rotateAngle}deg)`,
        }}
      >
        {sliderItems.map((sliderItem, index) => (
          <li key={sliderItem}>
            <SliderItem
              sliderItem={sliderItem}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              rotateAngle={rotateAngle}
              setDelay={setDelay}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Slider;
