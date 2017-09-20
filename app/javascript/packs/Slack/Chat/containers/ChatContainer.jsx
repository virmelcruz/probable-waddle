import React, { Component } from "react"
import PropTypes from "prop-types"
import List from "../components/Sidebar/List"
import Message from "../components/Message/Message"
import MessageInput from "../components/Message/MessageInput"
 
import UsersAPI from "../services/UsersAPI"
import ChannelsAPI from "../services/ChannelsAPI"

export default class ChatContainer extends Component {
  constructor() {
    super()
    this.state = { users: [], publicChannels: [], privateChannels: [], groupChannels: [] }
  }

  componentWillMount() {
    UsersAPI.fetchAll({
      onSuccess: (response) => {
        this.setState({users: response.data})
      }
    })

    ChannelsAPI.fetchAll({
      onSuccess: (response) => {
        this.setState({
          publicChannels: response.data.filter( (member) => { 
            return member.type === "PublicChannel" 
          }),
          privateChannels: response.data.filter( (member) => { 
            return member.type === "PrivateChannel" 
          }),
          groupChannels: response.data.filter( (member) => { 
            return member.type === "GroupChannel" 
          })
        })
      }
    })
  }

  render() {
    const { users, publicChannels, privateChannels, groupChannels } = this.state

    return (
      <div>
        <aside>
          <List 
            icon={ "hashtags" }
            type={ "Public Channels" }
            items={ publicChannels }/>
          <List 
            icon={ "lock" }
            type={ "Private Channels" }
            items={ privateChannels }/>
          <List 
            type={ "Direct Messages" }
            icon={ "circle" }
            items={ users }/>
        </aside>
        <article>
        </article>
      </div>
    )
  }
}
