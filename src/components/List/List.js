import React from 'react';
import { Task } from '../Task/Task'
import './List.css';

class List extends React.Component {
  render() {
    const { tasks } = this.props

    return (
    <>
    {tasks.map(task => <Task id={task.id} content={task.content} isCompleted={task.isCompleted} />)}
    </>
    )
  }
}

export { List };