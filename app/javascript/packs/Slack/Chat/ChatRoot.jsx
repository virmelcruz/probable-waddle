import React, { Component } from "react"
import PropTypes from "prop-types"

import ChatContainer from "./containers/ChatContainer"

export default class ChatRoot extends Component {
  render() {
    return (
      <div id="slack-app">
        <ChatContainer/>
      </div>
    )
  }
}
