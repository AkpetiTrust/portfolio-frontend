import React from "react";
import style from "./index.module.css";

function SliderItem({
  sliderItem,
  index,
  activeIndex,
  setActiveIndex,
  rotateAngle,
  setDelay,
}) {
  const indexToLocation = {
    0: {
      left: 50,
      bottom: 100,
    },
    1: {
      left: 100,
      bottom: 50,
    },
    2: {
      left: 50,
      bottom: 0,
    },
    3: {
      left: 0,
      bottom: 50,
    },
  };

  const { left, bottom } = indexToLocation[index];
  const active = index === activeIndex;

  return (
    <p
      onClick={() => {
        setActiveIndex(index);
        setDelay(null);
        setTimeout(() => {
          setDelay(3000);
        }, 3000);
      }}
      style={{
        left: `${left}%`,
        bottom: `${bottom}%`,
        transform: `translate(-50%, 50%) rotate(${rotateAngle * -1}deg)`,
      }}
      className={`${style.slider_item} ${active ? style.active : ""}`}
    >
      {sliderItem}
    </p>
  );
}

export default SliderItem;
