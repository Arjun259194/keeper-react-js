import "./css/Button.css";

export const Button = ({ H, W, bg, fontClr, onClick, text }) => {
  return (
    <button style={{ backgroundColor: bg, color: fontClr, height:H, width:W }} onClick={onClick}>
      <span class="material-symbols-outlined">{text}</span>
    </button>
  );
};
