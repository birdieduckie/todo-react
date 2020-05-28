import React from 'react';
import './Control.css';

class Control extends React.Component {
  state = {
    inputValue: ''
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value }, () => console.log(this.state.inputValue))
  }

  render() {
    const { inputValue } = this.state

    return (
      <>
        <input value={inputValue} onChange={this.handleChange} />
        <button>Добавить</button>
      </>
    )
  }
}

export { Control };