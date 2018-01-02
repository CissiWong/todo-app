import React from "react"
import "index.css"
import uuid from "uuid/v4"
import Input from "./input"
import Task from "./task"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          done: false,
          text: "yoga",
          id: uuid()
        },

        {
          done: false,
          text: "study",
          id: uuid()

        },

        {
          done: false,
          text: "write",
          id: uuid()
        }]
    }
  }

  addTask = (valueAdded) => {
    // newItem states how the info passed to the array and becomes the new "text"//
    const newItem = {
      text: valueAdded,
      done: false,
      id: uuid()
    }

    this.setState({
      // todos set the new state with text and fills the array.
      todos: [newItem, ...this.state.todos]
    })
  }

  handleChange = (id) => {
    console.log("handle change", id)
    const newArray = this.state.todos.map((x) => {
      if (x.id === id) {
        x.done = !x.done
      }
      return x
    })

    this.setState({
      todos: newArray
    })
  }

  removeTask = (id) => {
    const removedTaskArray = [...this.state.todos]
    removedTaskArray.splice(id, 1)
    this.setState({
      todos: removedTaskArray
    })
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
                  key={task.id}
                  id={task.id}
                  task={task.text}
                  done={task.done}
                  change={this.handleChange}
                  remove={this.removeTask} />
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
