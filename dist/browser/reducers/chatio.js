import * as actions from '../constants/ActionTypes'

const chat = (state = [ {id: 1, desc: 'welcome to adrian-chat'}], {type, payload}) => {
  switch(type) {
    case actions.ADD_CHAT:
      return [...state, payload]
    case actions.EDIT_CHAT:
      return state.map(line => 
        (line.id === payload.id) ? payload : line
      )
    case actions.DELETE_CHAT:
      console.log('hi');
      return state.filter(line =>
        (line.id !== payload.id)
      )
    case actions.COMPLETE_CHAT:
    /** make it so it can't be edited anymore */
      return state
    default:
      return state
  }
}

export default chat