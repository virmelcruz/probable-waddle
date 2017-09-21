import React, { Component } from "react"
import PropTypes from "prop-types"
import Item from "./Item";

export default class List extends Component {

  renderList() {
    const { items, icon, fetchMessages } = this.props
    return items.map( (item) => {
      return (
        <Item
          key={ item.id }
          item={ item }
          fetchMessages = {fetchMessages}
          />
      )
    })
  };

  render() {
    const { type, items, onClickCreateChannel } = this.props
    return (
      <div className="list-container">
        { type }
        { onClickCreateChannel === undefined ? "" :  
          <button onClick={ () => { onClickCreateChannel() } } >
            Create
          </button>
        }
        <ul>
          { this.renderList() }
        </ul>
      </div>
    )
  }
}
