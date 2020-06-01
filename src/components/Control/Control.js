import React from 'react';
import './Control.css';

class Control extends React.Component {
  state = {
    inputValue: '',
    selectedValue: 'all'
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
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

  handleFilterChange = e => {
    const { setFilter } = this.props

    this.setState({ selectedValue: e.target.value }, () => setFilter(this.state.selectedValue))
  }

  render() {
    const { inputValue, selectedValue } = this.state
    
    return (
      <>
        <input value={inputValue} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
        <button onClick={this.handleClick}>Добавить</button>
        <select onChange={this.handleFilterChange} value={selectedValue} className="filter">
          <option value="all">Все задачи</option>
          <option value="unsuccess">Только невыполненные</option>
          <option value="success">Только выполненные</option>
        </select>
      </>
    )
  }
}

export { Control };