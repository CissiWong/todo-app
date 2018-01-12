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
        <input
          className="complete"
          type="checkbox"
          checked={this.props.done}
          onChange={this.handleCheck} />
        <span className="text">
          {this.props.task}
        </span>
        <button
          className="remove"
          onClick={this.handleRemove}
          type="button" />
      </div>
    )
  }
}
