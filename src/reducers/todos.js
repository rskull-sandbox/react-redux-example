import * as Actions from '../actionTypes'

export const initialState = [
  {
    item: 'hello'
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_ITEM:
      return [...state, { item: action.item }]
    case Actions.DELETE_ITEM:
      return state.filter((v, k) => k !== action.id)
    default:
      return state
  }
}
