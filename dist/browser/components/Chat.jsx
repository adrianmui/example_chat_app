import React from 'react'
import PropTypes from 'prop-types'

const Chat = props => {
  const {onClick, text, chatId} = props
  
  return (
  <a key={chatId} onClick={onClick}>
    { text }   
    <br/>
  </a>
  )
}

Chat.PropTypes = {
  onclick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Chat