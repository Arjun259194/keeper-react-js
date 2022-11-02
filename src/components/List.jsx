import { Item } from "./Item";
import "./css/List.css";

export const List = ({ list, toggleTaskDone, listId }) => {
  const { title, date, tasks } = list;
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
          />
        ))}
      </div>
    </article>
  );
};
