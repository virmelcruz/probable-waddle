import React, { Component } from "react"
import PropTypes from "prop-types"
import List from "../components/Sidebar/List"
import Message from "../components/Message/Message"
import MessageInput from "../components/Message/MessageInput"
import ChannelForm from "../components/Forms/ChannelForm"
 
import UsersAPI from "../services/UsersAPI"
import ChannelsAPI from "../services/ChannelsAPI"
import MessagesAPI from "../services/MessagesAPI"

export default class ChatContainer extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      channels: [],
      messages: [],
      currentChannel: {}
    }
  }

  componentWillMount() {
    UsersAPI.fetchAll({
      onSuccess: (response) => {
        this.setState({users: response.data})
      }
    })

    ChannelsAPI.fetchAll({
      onSuccess: (response) => {
        this.setState({ channels: response.data } )
      }
    })
    
    this.fetchMessages({id: 1, type: 'PublicChannel'});
  }

  createChannel(params, ref1, ref2) {
    const { channels } = this.state

    ChannelsAPI.create({
      data: params,
      onSuccess: (response) => {
        this.setState({ channels: channels.concat(response.data) })
        this.toggleChannelForm(ref1, ref2)
      }
    })
  }

  fetchMessages(channel) {
    MessagesAPI.fetch(
      channel.id,
      {
      onSuccess: (response) => {
        this.setState({ messages: response.data, currentChannel: channel } )
      }
    })
  }

  toggleChannelForm(ref1, ref2) {
    if (ref1.hasAttribute('hidden')) {
      ref1.removeAttribute('hidden')
      ref2.setAttribute('hidden', 'hidden')
    } else {
      ref2.removeAttribute('hidden')
      ref1.setAttribute('hidden', 'hidden')
    }
  }

  createMessage(params) {
    const { messages, currentChannel } = this.state; 
    params.message.receiveable_id = currentChannel.id;
    params.message.receiveable_type = currentChannel.type;
    
    MessagesAPI.create({
      data: params,
      onSuccess: (response) => {
        this.setState({ messages: messages.concat(response.data) })
      }
    })
  }

  render() {
    const { users, channels, messages } = this.state
    const publicChannels = channels.filter( (member) => { return member.type === "PublicChannel" } )
    const privateChannels = channels.filter( (member) => { return member.type === "PrivateChannel" } )
    const groupChannels = channels.filter( (member) => { return member.type === "GroupChannel" } )

    let formRef, contentRef

    return (
      <div id="slack-app">
        <div 
          ref={ (el) => { formRef = el } }
          role="channel-form"
          hidden>
          <ChannelForm
            users={ users }
            onCreateChannel={ (value) => { this.createChannel(value, formRef, contentRef) } }
            onCancelCreateChannel={ () => { this.toggleChannelForm(formRef, contentRef) } }/>
        </div>
        <div
          className="sidebar"
          ref={ (el) => { contentRef = el } }
          role="main-content">
          <aside>
            <div className="organization-container">
              <h5>
                Medifi
              </h5>
              <span className="text-muted">
                vicruz
              </span>
            </div>
              <List 
                onClickCreateChannel={ () => { this.toggleChannelForm(formRef, contentRef) } }
                icon={ "hashtags" }
                type={ "Public Channels" }
                items={ publicChannels }
                fetchMessages = { (channelId) => { this.fetchMessages(channelId) } }/>
              <List 
                onClickCreateChannel={ () => { this.toggleChannelForm(formRef, contentRef) } }
                icon={ "lock" }
                type={ "Private Channels" }
                items={ privateChannels }
                fetchMessages = { (channelId) => { this.fetchMessages(channelId) } }/>
              <List 
                type={ "Direct Messages" }
                icon={ "circle" }
                items={ users }
                fetchMessages = { (channelId) => { this.fetchMessages(channelId) } }/>
          </aside>
          <article>
          </article>
        </div>
        <div
          className="message-panel">
          <Message
            items={ messages }
            onCreateMessage = { (value) => { this.createMessage(value) } } />
        </div>
      </div>
    )
  }
}
