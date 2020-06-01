import React from 'react';
import { Control, List } from '../components'

import './App.css';

class App extends React.Component {
  state = {
    tasks: [{ id: 1, content: 'Привет', isCompleted: false }]
  }

  addTask = (data) => {
    const { tasks } = this.state

    const newTask = { id: +new Date(), content: data, isCompleted: false }

    this.setState({ tasks: [...tasks, newTask] }, () => console.log(this.state.tasks))
  }

  deleteTask = (id) => {
    const { tasks } = this.state

    const updatedTasks = tasks.filter((task) => task.id !== id)

    this.setState({ tasks: updatedTasks })
  }

  completeTask = (id, isCompleted) => {
    const { tasks } = this.state

    const updatedTasks = tasks.map((task) => task.id === id ? ({ ...task, isCompleted }) : task)

    this.setState({ tasks: updatedTasks }, () => console.log(this.state.tasks))
  }

  render() {
    const { tasks } = this.state

    return (
      <div className="App">
        <Control addTask={this.addTask} />
        <List deleteTask={this.deleteTask} completeTask={this.completeTask} tasks={tasks} />
      </div>
    );
  }
}

// App (общий родитель)
// Control (инпут, кнопка добавить)
// List (список тасок)
// Task (таска, название ее, чекбокс, кнопка удалить)

export { App };
