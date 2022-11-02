import "./css/Main.css";
import { useState } from "react";
import { ListForm } from "./ListForm";
import { Lists } from "./Lists";

export const Main = ({ lists, toggleTaskDone }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <main className="container">
      {showForm && <ListForm />}
      <Lists lists={lists} toggleTaskDone={toggleTaskDone} />
    </main>
  );
};
