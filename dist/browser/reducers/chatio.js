import * as actions from '../constants/ActionTypes'

const defaultState = [
  {
    id: 1,
    desc: `welcome to adrian's chaat corner`
  },
  {
    id: 2,
    desc: `please type in your username or email`
  },
  {
    id: 3,
    desc: `to connect to you i would like to first know where you're from`
  }
]

const chat = (state = defaultState, {type, payload}) => {
  switch(type) {
    case actions.ADD_CHAT:
      return [...state, payload]
    case actions.EDIT_CHAT:
      return state.map(line => 
        (line.id === payload.id) ? payload : line
      )
    case actions.DELETE_CHAT:
      console.log('delete chat');
      console.log('after: ', state.filter(line => (line.id !== payload.id)))
      return state.filter(line => (line.id !== payload.id))
    case actions.COMPLETE_CHAT:
    /** make it so it can't be edited anymore */
      return state
    default:
      return state
  }
}

export default chat