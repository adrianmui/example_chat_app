import * as types from '../constants/ActionTypes'

export const addChat = text => ({ type: types.ADD_CHAT, text })
export const deleteChat = id => ({ type: types.DELETE_CHAT, id })
export const editChat = (id, text) => ({ type: types.EDIT_CHAT, id, text })
export const completeChat = id => ({ type: types.COMPLETE_CHAT, id })