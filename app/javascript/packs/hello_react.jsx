// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

//Lifecycle
//- componentWillMount
//- componentDidMount

//- componentWillUnmount
//- componentDidUnmount

//- componentWillUpdate
//- componentDidUpdate

// Slack
// - App
//    - MessageContainer
//      - Message
//        - editMessage () => { }
//        - deleteMessage () => { }
//    - MessageInput
//      - sendMessage () => {}
//    - UserPanel


import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <h1>
    Hello World!
  </h1>
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
