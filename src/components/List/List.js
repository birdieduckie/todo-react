import React from 'react';
import { Task } from '../Task/Task'
import './List.css';

class List extends React.Component {
  render() {
    const { tasks, deleteTask, completeTask, filteredTasks, isFiltered } = this.props

    const currentTasks = isFiltered ? filteredTasks : tasks

    return (
      <>
        {currentTasks.length > 0 &&
          currentTasks.map(task => 
            <Task 
              key={task.id} 
              id={task.id} 
              content={task.content} 
              isCompleted={task.isCompleted} 
              deleteTask={deleteTask} 
              completeTask={completeTask}
            />
          )
        }
        {currentTasks.length === 0 && 'Тасок пока нет!'}
      </>
    )
  }
}

export { List };