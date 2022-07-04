import React from "react";
import { Link } from "react-router-dom";

function NavLink({ setActive, children, ...props }) {
  return (
    <Link
      onClick={() => {
        setActive(false);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}

export default NavLink;
