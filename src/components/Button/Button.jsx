import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";

function Button({ onClick, children, to }) {
  let ContainerComponent = to
    ? (props) => (
        <Link to={to} {...props}>
          {props.children}
        </Link>
      )
    : (props) => <button {...props}>{props.children}</button>;

  return (
    <ContainerComponent onClick={onClick} className={style.button}>
      {children}
    </ContainerComponent>
  );
}

export default Button;
