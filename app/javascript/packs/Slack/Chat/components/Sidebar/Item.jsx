import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Item extends Component {

  handleClick(evt, { fetchMessages, item } = params) {
    evt.preventDefault();
    fetchMessages(item);
  }

  render() {
    const { fetchMessages } = this.props
    
    return (
      <li>
        <a href="#" onClick={ (evt) => { this.handleClick(evt, {fetchMessages, item: this.props.item} ) } }>
          { this.props.item.name || this.props.item.username }
        </a>
      </li>
    )
  }
}
