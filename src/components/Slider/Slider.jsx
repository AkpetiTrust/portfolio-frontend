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
      <ul
        style={{
          transform: `translateX(-45px) rotate(${rotateAngle}deg)`,
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
