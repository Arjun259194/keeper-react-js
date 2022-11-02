import { IconButton } from "./IconButton";
import "./css/Item.css";

export const Item = ({ text, done, onDbClick, index, listId }) => {
  return (
    <span
      className={`item ${done ? "done" : ""}`}
      onDoubleClick={() => {
        onDbClick(listId, index);
      }}
    >
      {text}
      <IconButton
        className="cancel__btn"
        S="2rem"
        bg="crimson"
        fontClr="white"
        text="close"
        forMobile={false}
      />
    </span>
  );
};
