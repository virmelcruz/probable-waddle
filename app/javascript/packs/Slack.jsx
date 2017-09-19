import React, { Component } from "react"
import { render } from "react-dom"
import PropTypes from "prop-types"

const App = () => (
  <h1> Hello </h1>
)

document.addEventListener("DOMContentLoaded", () => {
  render(
    <App/>,
    document.body.appendChild(document.createElement('div'))
  )
})
