import React from 'react'
import PropTypes from 'prop-types'

const Chat = (props) => {
  const {onclick, text} = props
  console.log('chat', props)
  return (
  <div className="hi" onClick={onclick}>
    { text }
    </div>
  )
}

Chat.PropTypes = {
  onclick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Chat