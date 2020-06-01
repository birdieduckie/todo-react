import React from 'react';
import { Task } from '../Task/Task'
import './List.css';

class List extends React.Component {
  render() {
    const { tasks, deleteTask, completeTask } = this.props

    return (
      <>
        {tasks.map(task => 
          <Task 
            key={task.id} 
            id={task.id} 
            content={task.content} 
            isCompleted={task.isCompleted} 
            deleteTask={deleteTask} 
            completeTask={completeTask}
          />
        )}
      </>
    )
  }
}

export { List };