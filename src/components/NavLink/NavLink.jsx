import React from "react";
import { HashLink } from "react-router-hash-link";

function NavLink({ children, setActive, ...props }) {
  return (
    <HashLink
      onClick={() => {
        setActive(false);
      }}
      {...props}
    >
      {children}
    </HashLink>
  );
}

export default NavLink;
