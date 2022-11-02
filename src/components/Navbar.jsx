import { useState } from "react";
import "./css/Navbar.css";
import { IconButton } from "./IconButton";

export const Navbar = ({ fg, bg }) => {
  const [toggle, setToggle] = useState(false);

  const linkStyle = {
    color: fg,
  };

  const navStyle = {
    backgroundColor: bg,
    right: toggle ? "0" : "-100%",
  };

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {!toggle && (
        <IconButton
          bg="lightgreen"
          fontClr="black"
          onClick={onToggle}
          text="Menu"
          S='2.25rem'
          forMobile={true}
        />
      )}
      <nav style={navStyle}>
        <ul>
          <li>
            <a style={linkStyle} href="/">
              Home
            </a>
          </li>
          <li>
            <a style={linkStyle} href="/about">
              About
            </a>
          </li>
          <li>
            <a style={linkStyle} href="/help">
              Help
            </a>
          </li>
          <li>
            {toggle && (
              <IconButton
                bg="crimson"
                fontClr="white"
                onClick={onToggle}
                text='close'
                S='2.25rem'
                forMobile={true}
              />
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};
