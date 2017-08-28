import React from 'react'
import store from './store'

import Chat from './components/Chat'
import Navbar from './components/navbar/Navbar'

import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

const createLine = payload => (store.dispatch({type: 'ADD_CHAT', payload}))
const deleteLine = payload => (store.dispatch({type: 'DELETE_CHAT', payload}))

let msgVal = ``;

const socket = io()
const go = msg => {
  socket.emit('chat message', msg);
  createLine(msg);
}

const AppRoot = () => (
  <div>     
    <Navbar title="React Chat"></Navbar>
    {
      store.getState().chat.map(chat => (
        <Chat 
          chatId={chat.id} 
          text={chat.desc} 
          onClick={() => deleteLine(chat)}/> 
      ))
    }
    <TextField 
      id="msg" 
      label="Msg" 
      value={msgVal} 
      onChange={$event => { console.log($event); msgVal = $event.target.value}}>
      </TextField>
    <Button 
      color="primary" 
      onClick={() => createLine(msgVal = ``)}>
      Click </Button>
  </div>
)

export default AppRoot