import React from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    tasks: [{ id: 1, content: 'Привет', isCompleted: false }]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Жопыффф.
          </p>
        </header>
      </div>
    );
  }
}

// App (общий родитель)
// Control (инпут, кнопка добавить)
// List (список тасок)
// Task (таска, название ее, чекбокс, кнопка удалить)

export default App;
