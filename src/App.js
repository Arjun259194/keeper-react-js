import logo from './logo.png'
import { Header } from "./components/Header";
import { Main } from './components/Main';
import { useState } from 'react'

function App() {
  const [lists, setLists] = useState(
    [
      {
        _id: 1,
        title: "Monday plan",
        date: "12 feb 2021",
        tasks: [
          {
            text: "I can't think any thing",
            done: false
          },
          {
            text: "BHARAT MATA KI JAY",
            done: true
          }
        ]
      },
      {
        _id: 2,
        title: "Things to do before friday",
        date: "12 feb 2021",
        tasks: [
          {
            text: "go to gym",
            done: false
          }
        ]
      },
      {
        _id: 3,
        title: "Monday plan",
        date: "12 feb 2021",
        tasks: [
          {
            text: "go to gym",
            done: false
          },
          {
            text: "buy veggies",
            done: true
          },
          {
            text: "install GTA X",
            done: false
          },
          {
            text: "go to duck hospital",
            done: true
          }
        ]
      },
      {
        _id: 4,
        title: "Things to do before friday",
        date: "12 feb 2021",
        tasks: [
          {
            text: "buy new bike",
            done: false
          }
        ]
      },
    ]
  )

  const getRandomId = () => {

  }

  const toggleTaskDone = (id, index) => {
    let newLists = [...lists]
    for (let list of newLists) {
      if (list._id === id) {
        list.tasks[index] = { ...list.tasks[index], done: !list.tasks[index].done }
      }
    }
    setLists(newLists)
  }

  return (
    <div className="App">
      <Header logo={logo} text="Keeper.com" bg='#2c2c2c' fg='aliceblue' />
      <Main lists={lists} toggleTaskDone={toggleTaskDone} />
    </div>
  );
}

export default App;
