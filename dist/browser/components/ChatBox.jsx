import React from 'react'
import PropTypes from 'prop-types'
import Chat from './Chat'

const ChatBox = ({ chats, onChatClick}) => {
  <ul>
    { 
      chats.map( chat => {
        <Chat key={chat.id} {...chat} onclick= {()=> onChatClick(chat.id)}/>
      })
    }
  </ul>
}

ChatBox.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onChatClick: PropTypes.func.isRequired
}

export default ChatBox