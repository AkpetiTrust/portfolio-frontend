import React, { useState, useEffect } from "react";
import ServicesItem from "../ServicesItem/ServicesItem";
import ServicesListItem from "../ServicesListItem/ServicesListItem";
import style from "./index.module.css";

function ServicesSlider() {
  const [services, setServices] = useState([
    {
      title: "Front-end web development",
      body: "I build blazing fast web applications with modern technologies like React JS and SCSS. I deliver accessible products by using proper semantics in my work, I also design clean user interfaces with tools like Figma.",
    },
    {
      title: "Native app development",
      body: "I create native mobile apps for both Android and iOS using React Native. My products are efficient and scalable. The apps I develop run at record speed, and I design clean UIs for such apps too.",
    },
    {
      title: "Back-end development",
      body: "I provide maintainable solutions to server-side problems. I use the latest stack like Laravel, and good database architecture like PostgreSQL. Poor database structures are usually costly to an organization, but you don't have to worry about that with me.",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("Y");

  const updateDirection = (width) => {
    setDirection((prevDirection) => {
      if (width <= 830 && prevDirection === "Y") {
        return "X";
      } else if (width >= 830 && prevDirection === "X") {
        return "Y";
      } else {
        return prevDirection;
      }
    });
  };

  useEffect(() => {
    updateDirection(window.innerWidth);

    window.addEventListener("resize", (e) => {
      let width = e.target.innerWidth;
      updateDirection(width);
    });
  }, []);

  return (
    <div className={style.slider}>
      <ul>
        {services.map(({ title }, index) => (
          <ServicesListItem
            key={title}
            title={title}
            active={index === activeIndex}
            onClick={() => {
              setActiveIndex(index);
            }}
          />
        ))}
      </ul>
      <div className={style.body}>
        <ul
          style={{ transform: `translate${direction}(-${activeIndex * 100}%)` }}
        >
          {services.map(({ body }, index) => (
            <ServicesItem
              active={index === activeIndex}
              body={body}
              key={body}
              top={`${index * 100}%`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServicesSlider;
