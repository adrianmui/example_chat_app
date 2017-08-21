import React from 'react'
import store from './store'

import Chat from './components/Chat'

const AppRoot = () => {
  const deleteLine = payload => {
    console.log('before: ', store.getState().chat);
    return store.dispatch({type: 'DELETE_CHAT', payload})
  }

  return (
    <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">PeopleGrove React</a>
      </nav>

      {
        store.getState().chat.map(chat => (
          <Chat chatId={chat.id} text={chat.desc} onClick={() => deleteLine(chat)}/> 
        ))
      }
      
      <ul id="messages"></ul>
      <form action="">
        <input id="m"/>
        <button>Send</button>
      </form>
    </div>
  )
}

export default AppRoot