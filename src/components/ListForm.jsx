import { IconButton } from "./IconButton";
import "./css/ListForm.css";

export const ListForm = () => {
  return (
    <form action="" className="form">
      <div className="form__input">
        <label htmlFor="title">Enter List Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div className="final__buttons">
        <IconButton
          text="add"
          bg="#ffd983"
          fontClr="Black"
          S="2.25rem"
          forMobile={false}
        />
        <IconButton
          text="close"
          bg="crimson"
          fontClr="white"
          S="2.25rem"
          forMobile={false}
        />
      </div>
    </form>
  );
};
