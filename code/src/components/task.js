import React from "react"

export default class Task extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      done: props.done
    }
  }

  handleCheck = () => {
    this.setState({
      done: !this.state.done
    }, () => {
      this.props.change(this.state.done, this.props.task)
    })
  }

  render() {
    return (
      <div className="new-task-box">
        <label>
          <input
            className="complete"
            type="checkbox"
            checked={this.state.done}
            onChange={this.handleCheck} />
          {this.props.task}
          <button
            className="remove"
            type="button">Remove
          </button>
        </label>
      </div>
    )
  }
}
