import React from "react"
import "index.css"
import Input from "./input"
import Task from "./task"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          done: false,
          text: "yoga"
        },

        {
          done: false,
          text: "study"
        },

        {
          done: false,
          text: "write"
        }]
    }
  }

  addTask = (valueAdded) => {
    // newItem states how the info passed to the array and becomes the new "text"//
    const newItem = {
      text: valueAdded,
      done: false
    }

    this.setState({
      // todos set the new state with text and fills the array.
      todos: [newItem, ...this.state.todos]
    })
  }

  findCheck = () => {
    if (this.state.todos.done === false) {
      return false
    } else {
      return true
    }
  }

  handleChange = () => {
    this.state.todos.find(this.findCheck)
  }

  render() {
    return (
    // OnNewTask brings the value of task into app.js//}
    // addTask calls the function addTask//}
      <div className="form-container">
        <Input
          OnNewTask={this.addTask} />
        <div className="list-render">
          <ul>
            {
              this.state.todos.map(task => (
                <Task
                  index={task.index}
                  task={task.text}
                  done={task.done}
                  change={this.handleChange} />
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
