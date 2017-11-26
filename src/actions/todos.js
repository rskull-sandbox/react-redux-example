import { ADD_ITEM, DELETE_ITEM } from '../actionTypes'

export const addItem = item => ({ type: ADD_ITEM, item })
export const deleteItem = id => ({ type: DELETE_ITEM, id })
