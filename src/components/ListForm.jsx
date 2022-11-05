import { IconButton } from "./IconButton";
import { useState } from "react";
import "./css/ListForm.css";

export const ListForm = ({ addList, toggleForm }) => {

  const [title, setTitle] = useState("")

  return (
    <form action="" className="form">
      <div className="form__input">
        <label htmlFor="title">Enter List Title</label>
        <input type="text" name="title" id="title" value={title} onChange={e => {
          setTitle(e.target.value)
        }} />
      </div>
      <div className="final__buttons">
        <IconButton
          text="add"
          bg="#ffd983"
          fontClr="Black"
          S="2.25rem"
          forMobile={false}
          onClick={ e => {
            e.preventDefault()
            addList(title)
            setTitle("")
            toggleForm()
          }}
        />
        <IconButton
          text="close"
          bg="crimson"
          fontClr="white"
          S="2.25rem"
          forMobile={false}
          onClick={toggleForm}
        />
      </div>
    </form>
  );
};
