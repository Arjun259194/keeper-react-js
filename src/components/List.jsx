import { useState } from "react";
import { Item } from "./Item";
import "./css/List.css";

export const List = ({
  list,
  toggleTaskDone,
  listId,
  removeLists,
  addTaskToList,
  removeTask
}) => {
  const { title, date, tasks } = list;
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [inputText, setInputText] = useState("");

  const addBtnStyle = {
    backgroundColor: !showTaskForm ? "lightgreen" : "darkgreen",
    color: !showTaskForm ? "black" : "white",
  };

  const addBtnSpanStyle = {
    rotate: showTaskForm ? "45deg" : null,
  };

  const toggleShowTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };

  return (
    <article className="list__card">
      <h3 className="title">{title}</h3>
      <span className="timestamp">{date}</span>
      <div className="items">
        {tasks.map(({ text, done }, index) => (
          <Item
            text={text}
            done={done}
            key={index}
            listId={listId}
            index={index}
            onDbClick={toggleTaskDone}
            removeTask={removeTask}
          />
        ))}
      </div>
      {showTaskForm ? (
        <div className="taskForm">
          <input
            type="text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              addTaskToList(listId, inputText);
              setInputText("")
              toggleShowTaskForm()
            }}
          >
            Add
          </button>
        </div>
      ) : null}
      <button className="btn close" onClick={() => removeLists(listId)}>
        <span className="material-symbols-outlined">close</span>
      </button>
      <button
        className="btn add"
        onClick={toggleShowTaskForm}
        style={addBtnStyle}
      >
        <span style={addBtnSpanStyle} className="material-symbols-outlined">
          add
        </span>
      </button>
    </article>
  );
};
