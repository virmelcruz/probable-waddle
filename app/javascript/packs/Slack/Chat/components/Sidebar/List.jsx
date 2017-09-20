import React, { Component } from "react"
import PropTypes from "prop-types"

import Item from "./Item";

export default class List extends Component {
  renderUsers() {
    const { items } = this.props

    return items.map( (item) => {
      return (
        <Item
          key={ item.id }
          name={ item.username || item.name }/>
      )
    })
  }

  render() {
    const { type, items } = this.props

    return (
      <div>
        { type }
        <ul>
          { this.renderUsers() }
        </ul>
      </div>
    )
  }
}
