import React from "react"

class ListItem extends React.Component {
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
      this.props.lunchBox(this.state.done, this.props.text)
    })
  }

  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={this.handleCheck} />
        {this.props.text}
      </li>
    )
  }
}

export default ListItem
