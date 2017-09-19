import React, { Component } from "react"
import PropTypes from "prop-types"
import List from "../components/Sidebar/List"
import Message from "../components/Message/Message"
import MessageInput from "../components/Message/MessageInput"
 
import UsersAPI from "../services/UsersAPI"

export default class ChatContainer extends Component {
  constructor() {
    super()
    this.state = { users: [] }
  }

  componentWillMount() {
    UsersAPI.fetchAll({
      onSuccess: (response) => {
        this.setState({users: response.data})
      }
    })
  }

  render() {
    const { users } = this.state

    return (
      <div>
        <aside>
          <List 
            icon={ "circle" }
            items={ users }/>
        </aside>
        <article>
        </article>
      </div>
    )
  }
}
