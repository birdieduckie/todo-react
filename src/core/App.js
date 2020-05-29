import React from 'react';
import { Control, List, Task } from '../components'

import './App.css';

class App extends React.Component {
  state = {
    tasks: [{ id: 1, content: 'Привет', isCompleted: false }]
  }

  addTask = (data) => {
    const { tasks } = this.state

    const newTask = { id: +new Date(), content: data, isCompleted: false }

    this.setState({ tasks: [...tasks, newTask] }, () => console.log(tasks))
  }

  render() {
    return (
      <div className="App">
        <Control addTask={this.addTask} />
      </div>
    );
  }
}

// App (общий родитель)
// Control (инпут, кнопка добавить)
// List (список тасок)
// Task (таска, название ее, чекбокс, кнопка удалить)

export { App };
