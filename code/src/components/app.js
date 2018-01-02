import React from "react"
import "index.css"
import uuid from "uuid/v4"
import Input from "./input"
import Task from "./task"

class App extends React.Component {
  constructor(props) {
    super(props)
    const todos = JSON.parse(localStorage.getItem("newData"))
    this.state = {
      todos: todos || []
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
    }, () => {
      localStorage.setItem("newData", JSON.stringify(this.state.todos))
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
    }, () => {
      localStorage.setItem("newData", JSON.stringify(this.state.todos))
    })
  }

  removeTask = (id) => {
    const removedTaskArray = [...this.state.todos]
    removedTaskArray.splice(id, 1)
    this.setState({
      todos: removedTaskArray
    }, () => {
      localStorage.setItem("newData", JSON.stringify(this.state.todos))
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
