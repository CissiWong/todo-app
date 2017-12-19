import React from "react"
import ListItem from "./list"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          done: false,
          text: "Yoga"
        },

        {
          done: false,
          text: "Lunchbox"
        },

        {
          done: false,
          text: "Assignment"
        },

        {
          done: false,
          text: "Group assignment"
        }
      ]
    }
  }

  findChange = () => {
    if (this.state.items.done === false) {
      return false
    } else {
      return true
    }
  }

  handleChange = () => {
    this.state.items.find(this.findChange)
  }

  render() {
    return (
      <div>
        <form >
          <input />
          <button>Submit</button>
          <ul>
            {this.state.items.map(item => (
              <ListItem
                text={item.text}
                done={item.done}
                lunchBox={this.handleChange} />
            ))}
          </ul>
        </form>
      </div>
    )
  }
}

export default App
