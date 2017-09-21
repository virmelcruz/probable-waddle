import React, { Component } from "react"
import PropTypes from "prop-types"
import MessageInput from "./MessageInput"

export default class List extends Component {

  renderList() {
    const { items } = this.props
    return items.map( (item) => {
      return (
        <li key={ item.id }> {item.content} </li>
      )
    })
  };

  render() {
    const { onCreateMessage } = this.props

    return (
      <div>
        <div>
          <ul>
            { this.renderList() }
          </ul>
        </div>
        <div>
          <MessageInput onCreateMessage = { onCreateMessage }/>
        </div>
      </div>
    )
  }
}
