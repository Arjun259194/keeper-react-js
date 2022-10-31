import { useState } from "react";
import "./css/Navbar.css";
import { Button } from "./Button";

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
        <Button
          bg="lightgreen"
          fontClr="black"
          onClick={onToggle}
          text="Menu"
          H='2.25rem'
          W="2.25rem"
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
              <Button
                bg="crimson"
                fontClr="white"
                onClick={onToggle}
                text='close'
                H='2.25rem'
                W="2.25rem"
              />
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};
