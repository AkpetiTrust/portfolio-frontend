import React, { useState } from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";

function Nav() {
  const [active, setActive] = useState(false);

  return (
    <nav className={`${style.nav} ${active ? style.active : ""}`}>
      <Link to={"/"}>
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
              id="a"
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
              id="b"
              gradientUnits="userSpaceOnUse"
              xlinkHref="#a"
              x1={281.1}
              y1={16.4}
              x2={521.2}
              y2={376.6}
            />
          </defs>
          <path
            d="m678 520.2-58.3-384.6h151.9V0H376.9C458 139.6 597.3 380.3 678.1 520.2z"
            style={{
              fill: "url(#b)",
            }}
          />
          <path
            d="m300.4 1.4 150.2 260.2 150.2 260.2H0l150.2-260.2L300.4 1.4zm0 216.1 25.5 44.1 25.5 44.1H249.6l25.5-44.1 25.5-44.1z"
            style={{
              fill: "url(#a)",
            }}
          />
        </svg>
      </Link>
      <span
        className={style.toggle}
        onClick={() => {
          setActive((prevValue) => !prevValue);
        }}
        aria-hidden
      >
        {" "}
        <span></span>
      </span>
      <ul>
        <li>
          <Link
            onClick={() => {
              setActive(false);
            }}
            to="/"
          >
            HOME
          </Link>
        </li>
        <li>
          <NavLink setActive={setActive} to="/#about">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink setActive={setActive} to="/#services">
            SERVICES
          </NavLink>
        </li>
        <li>
          <NavLink setActive={setActive} to="/#stack">
            STACK
          </NavLink>
        </li>
        <li>
          <NavLink setActive={setActive} to="/#projects">
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink setActive={setActive} to="/#contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
