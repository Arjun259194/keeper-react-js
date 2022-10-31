import "./css/Header.css";
import { Navbar } from "./Navbar";

export const Header = ({ logo, text, bg, fg }) => {
  return (
    <header style={{ backgroundColor: bg, color: fg }}>
      <div
        className="heading"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img src={logo} alt="logo" id="logo" />
        <h1 className="heading__text">{text}</h1>
      </div>
      <Navbar fg={fg} bg={bg}/>
    </header>
  );
};
