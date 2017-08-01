import React from 'react'
import store from './store'

import Chat from './components/Chat'

const AppRoot = () => {
  console.log(store.getState());

  let temp = function() {
    console.log('hi')
  }

  return (
    <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">PeopleGrove React</a>
      </nav>

      {
        store.getState().chat.map( chat => {
          console.log('chat map', chat);
          return  (<Chat text={chat.desc}
            onClick={store.dispatch({type: 'DELETE_CHAT', payload: chat})}
          />)
        })
      }
      
      <ul id="messages"></ul>
      <form action="">
        <input id="m" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default AppRoot