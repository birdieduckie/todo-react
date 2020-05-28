import React from 'react';
import { Control, List, Task } from '../components'

import './App.css';

class App extends React.Component {
  state = {
    tasks: [{ id: 1, content: 'Привет', isCompleted: false }]
  }

  render() {
    return (
      <div className="App">
        <Control />
      </div>
    );
  }
}

// App (общий родитель)
// Control (инпут, кнопка добавить)
// List (список тасок)
// Task (таска, название ее, чекбокс, кнопка удалить)

export { App };
