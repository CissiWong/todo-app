import React from "react"

class Input extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      task: "",
      todos: [""]
    }
  }

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newItem = { text: this.state.task }
    this.setState({
      todos: [newItem, ...this.state.todos]
    })
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleChange} />
          <button
            onClick={this.handleSubmit}>Submit
          </button>
        </form>
        <ul>
          {
            this.state.todos.map(task => <Input
              key={task.id}
              id={task.id}
              task={task.task}
              done={task.done} />)
          }
        </ul>
      </div>
    )
  }
}

export default Input
