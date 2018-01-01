import React from "react"
import "index.css"
import Input from "./input"
import Task from "./task"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  addTask = (anyRandomArgument) => {
    // newItem states how the info passed to the array and becomes the new "text"//
    const newItem = {
      text: anyRandomArgument
    }
    // todos set the new state with text and fills the array.
    this.setState({
      todos: [newItem, ...this.state.todos]
    })
  }

  render() {
    return (
    // OnNewTask brings the value of task into app.js//}
    // addTask calls the function addTask//}
      <div className="form-container">
        <Input OnNewTask={this.addTask} />
        <ul className="list-render">
          {
            this.state.todos.map(task => (
              <Task
                index={task.index}
                task={task.text}
                done={task.done} />
            ))}
        </ul>
      </div>
    )
  }
}

export default App
