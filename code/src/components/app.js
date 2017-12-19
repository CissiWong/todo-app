import React from "react"
import List from "./list"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      term: "",
      items: [],
      complete: false
    }
  }

  onChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    })
  }

  handleCheckBox = () => {
    this.setState({
      complete: !this.state.complete
    })
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input
            value={this.state.term}
            onChange={this.onChange} />
          <button>Submit</button>
          <List items={this.state.items} />
        </form>
      </div>
    )
  }
}

export default App
