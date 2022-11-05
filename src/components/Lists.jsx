import "./css/Lists.css";
import { List } from "./List";
import { AddCard } from "./AddCard";

export const Lists = ({
  lists,
  toggleForm,
  toggleTaskDone,
  removeLists,
  addTaskToList,
  removeTask,
}) => {
  return (
    <section className="lists">
      {lists.map((list) => (
        <List
          list={list}
          key={list._id}
          listId={list._id}
          toggleTaskDone={toggleTaskDone}
          removeLists={removeLists}
          addTaskToList={addTaskToList}
          removeTask={removeTask}
        />
      ))}
      <AddCard onClick={toggleForm} />
    </section>
  );
};
