import * as actions from '../constants/ActionTypes';

const todos = (state = [], {type, payload}) => {
  switch(type) {
    case actions.ADD_CHAT:
      return [...state, payload]
    case actions.EDIT_CHAT:
      return state.map(line => 
        (line.id === payload.id) ? payload : line
      )
    case actions.DELETE_CHAT:
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