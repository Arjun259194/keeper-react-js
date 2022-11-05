import "./css/Main.css";
import { useState } from "react";
import { ListForm } from "./ListForm";
import { Lists } from "./Lists";

export const Main = ({
  lists,
  toggleTaskDone,
  addList,
  removeLists,
  addTaskToList,
  removeTask,
}) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <main className="container">
      {showForm && <ListForm toggleForm={toggleForm} addList={addList} />}
      <Lists
        lists={lists}
        toggleTaskDone={toggleTaskDone}
        toggleForm={toggleForm}
        removeLists={removeLists}
        addTaskToList={addTaskToList}
        removeTask={removeTask}
      />
    </main>
  );
};
