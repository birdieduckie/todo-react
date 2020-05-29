import React from 'react';
import './Control.css';

class Control extends React.Component {
  state = {
    inputValue: ''
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value }, () => console.log(this.state.inputValue))
  }

  handleClick = () => {
    const { addTask } = this.props

    addTask(this.state.inputValue)

    this.setState({ inputValue: '' })
  }

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.handleClick()
    }
  }

  render() {
    const { inputValue } = this.state

    return (
      <>
        <input value={inputValue} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
        <button onClick={this.handleClick}>Добавить</button>
      </>
    )
  }
}

export { Control };