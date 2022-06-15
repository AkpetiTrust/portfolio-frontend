import React from "react";

function NavLink({ children, setActive, ...props }) {
  return (
    <a
      onClick={() => {
        setActive(false);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

export default NavLink;
