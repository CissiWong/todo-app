import React from "react"

export default class Task extends React.Component {

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox" />
          {this.props.task}
          <button
            type="button">Remove
          </button>
        </label>
      </div>
    )
  }
}
