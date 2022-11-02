import { List } from "./List";
import "./css/Lists.css";

export const Lists = ({ lists, toggleForm, toggleTaskDone }) => {
  return (
    <section className="lists">
      {lists.map((list) => (
        <List
          list={list}
          key={list._id}
          listId={list._id}
          toggleTaskDone={toggleTaskDone}
        />
      ))}
      {/* <AddCard /> */}
    </section>
  );
};
