import React from "react"

const List = props => (
  <ul>
    {
      props.items.map((item, index) =>
        <li
          key={index}>
          {item}
          <input type="checkbox" onChange={this.handleCheckBox} />
        </li>)
    }
  </ul>
)

export default List
