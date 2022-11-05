import "./css/IconButton.css";

export const IconButton = ({ S, bg, fontClr, onClick, text, forMobile }) => {
  return (
    <button
      className={`icon__btn ${forMobile ? 'for__mobile' : ''}`}
      style={{ backgroundColor: bg, color: fontClr, height: S, width: S }}
      onClick={onClick}
    >
      <span className="material-symbols-outlined">{text}</span>
    </button>
  );
};
