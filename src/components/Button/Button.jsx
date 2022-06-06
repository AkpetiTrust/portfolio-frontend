import React from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";

function Button({
  color = "#FFFD77",
  borderColor = "#FFFD77",
  children,
  isLink,
  to,
}) {
  const ContainerComponent = isLink
    ? (props) => (
        <Link to={to} {...props}>
          {props.children}
        </Link>
      )
    : (props) => <button {...props}>{props.children}</button>;

  return (
    <ContainerComponent
      className={style.button}
      style={{ color, border: `1px solid ${borderColor}` }}
    >
      {children}
    </ContainerComponent>
  );
}

export default Button;
