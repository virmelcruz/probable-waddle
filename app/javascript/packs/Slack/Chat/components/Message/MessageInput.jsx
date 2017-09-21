import React, { Component } from "react" 
import PropTypes from "prop-types"

export default class ChannelForm extends Component {

    handleSubmit(evt, { messageInputRef } = params) {
      const { onCreateMessage } = this.props
      evt.preventDefault()     

      let newParams = {
        message: {
          content: messageInputRef.value
        }
      }

      onCreateMessage(newParams)
    }

  render() {
    const { onCancelCreateChannel } = this.props
    let messageInputRef

    return (
      <form onSubmit={ (evt) => { this.handleSubmit(evt, { messageInputRef }) } } >
        <label htmlFor="message_input">
          Message
        </label>
        <input 
          ref={ (el) => { messageInputRef = el } }
          type="text" 
          id="message_input"/>

        <div>
          <button type="submit">
            Create
          </button>
        </div>
      </form>
    )
  }
}
