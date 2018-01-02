import React from "react"

export default class Task extends React.Component {

  handleCheck = () => {
    this.props.change(this.props.id)
  }

  handleRemove = () => {
    this.props.remove(this.props.id)
  }

  render() {
    return (
      <div className="new-task-box">
        <label>
          <input
            className="complete"
            type="checkbox"
            checked={this.props.done}
            onChange={this.handleCheck} />
          {this.props.task}
          <button
            className="remove"
            onClick={this.handleRemove}
            type="button">Remove
          </button>
        </label>
      </div>
    )
  }
}
