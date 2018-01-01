import React from "react"

class Input extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      task: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      task: event.target.value
      // captures the value entered
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // below pass the value to app.js
    this.props.OnNewTask(this.state.task)
    // below emptying the input field
    this.setState({
      task: ""
    })
  }

  render() {
    return (
    // calls the handleChange function}
      <form onSubmit={this.handleSubmit}>
        <input
          className="input-field"
          required
          onChange={this.handleChange}
          type="text"
          value={this.state.task} />
        <button className="submit">Submit</button>
      </form>
    )
  }
}

export default Input
