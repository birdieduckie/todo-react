import React from 'react';
import './Task.css';

class Task extends React.Component {
  render() {
    const { id, content, isCompleted } = this.props
    
    return (
      <div>
        {content}
      </div>
    )
  }
}

export { Task }; 