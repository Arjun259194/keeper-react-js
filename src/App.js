import logo from './logo.png'
import { Header } from "./components/Header";
import { Main } from './components/Main';
import { useState } from 'react'


function App() {
  const [lists, setLists] = useState(
    [
      {
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
          }
        ]
      },
      {
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
          }
        ]
      },
      {
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
          }
        ]
      }
    ]
  )
  return (
    <div className="App">
      <Header logo={logo} text="Keeper.com" bg='#2c2c2c' fg='aliceblue' />
      <Main />
    </div>
  );
}

export default App;
