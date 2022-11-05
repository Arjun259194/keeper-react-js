import "./css/AddCard.css";
import { IconButton } from "./IconButton";

export const AddCard = ({ onClick }) => {
  return (
    <div className="add_card card">
      <span
        style={{
          color: "gray",
          fontWeight: "300",
          fontSize: "1.5rem",
        }}
      >
        Add Task
      </span>
      <IconButton
        className="add__btn"
        S="2rem"
        bg="lightgreen"
        fontClr="black"
        text="add"
        forMobile={false}
        onClick={onClick}
      />
    </div>
  );
};
