import React, { Component } from "react" 
import PropTypes from "prop-types"

export default class ChannelForm extends Component {
  render() {
    const { onCancelCreateChannel } = this.props

    return (
      <form>
        <label htmlFor="channel_name">
          Channel Name
        </label>
        <input 
          type="text" 
          id="channel_name"/>

        <label htmlFor="channel_type">
          Channel Type
        </label>
        <select
          id="channel_type">
          <option> Public Channel </option>
          <option> Private Channel </option>
          <option> Group Channel </option>
        </select>

        <label>
          Users
        </label>
        <div>
          <button type="submit">
            Create
          </button>

          <button 
            type="button" 
            onClick={ () => { onCancelCreateChannel() } }>
            Cancel
          </button>
        </div>
      </form>
    )
  }
}
