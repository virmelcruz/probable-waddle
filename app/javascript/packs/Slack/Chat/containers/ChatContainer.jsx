import React, { Component } from "react"
import PropTypes from "prop-types"
import List from "../components/Sidebar/List"
import Message from "../components/Message/Message"
import MessageInput from "../components/Message/MessageInput"
import ChannelForm from "../components/Forms/ChannelForm"
 
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

  toggleChannelForm(ref1, ref2) {
    if (ref1.hasAttribute('hidden')) {
      ref1.removeAttribute('hidden')
      ref2.setAttribute('hidden', 'hidden')
    } else {
      ref2.removeAttribute('hidden')
      ref1.setAttribute('hidden', 'hidden')
    }
  }

  render() {
    const { users, publicChannels, privateChannels, groupChannels } = this.state
    let formRef, contentRef;

    console.log("it renders")

    return (
      <div>
        <div 
          ref={ (el) => { formRef = el } }
          role="channel-form"
          hidden>
          <ChannelForm
            onCancelCreateChannel={ () => { this.toggleChannelForm(formRef, contentRef) } }/>
        </div>
        <div 
          ref={ (el) => { contentRef = el } }
          role="main-content">
          <aside>
            <List 
              onClickCreateChannel={ () => { this.toggleChannelForm(formRef, contentRef) } }
              icon={ "hashtags" }
              type={ "Public Channels" }
              items={ publicChannels }/>
            <List 
              onClickCreateChannel={ () => { this.toggleChannelForm(formRef, contentRef) } }
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
      </div>
    )
  }
}
