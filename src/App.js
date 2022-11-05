import logo from './logo.png'
import { Header } from "./components/Header";
import { Main } from './components/Main';
import { useState } from 'react'
import { getCurrDate, getRandomId } from './module'

function App() {
  const [lists, setLists] = useState([])

  const addList = (title) => {
    setLists([...lists, {
      _id: getRandomId(),
      title: title,
      date: getCurrDate(),
      tasks: []
    }])
  }

  const removeLists = id => {
    setLists(
      lists.filter((list) => list._id !== id)
    )
  }

  const addTaskToList = (id, text) => {
    setLists(
      [...lists].map(list => {
        if (list._id === id) {
          list.tasks = [...list.tasks, {
            text: text,
            done: false
          }]
        }
        return list
      })
    )
  }

  const removeTask = (id, index) => {
    setLists(
      [...lists].map(list => {
        if (list._id === id) {
          list.tasks = list.tasks.filter((task, _index) => index !== _index)
        }
        return list
      })
    )
  }

  const toggleTaskDone = (id, index) => {
    setLists(
      [...lists].map(list => {
        if (list._id === id)
          list.tasks[index] = { ...list.tasks[index], done: !list.tasks[index].done }
        return list
      })
    )
  }

  return (
    <div className="App">
      <Header
        logo={logo}
        text="Keeper.com"
        bg='#2c2c2c'
        fg='aliceblue'
      />
      <Main
        lists={lists}
        toggleTaskDone={toggleTaskDone}
        addList={addList}
        removeLists={removeLists}
        addTaskToList={addTaskToList}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
