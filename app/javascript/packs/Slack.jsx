import React, { Component } from "react"
import { render } from "react-dom"
import PropTypes from "prop-types"

import { default as ChatRoot } from "./Slack/Chat/ChatRoot"

document.addEventListener("DOMContentLoaded", () => {
  render(
    <ChatRoot/>,
    document.body.appendChild(document.getElementById('app'))
  )
})
