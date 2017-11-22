import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

/**
 * ActionTypes
 */

export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

/**
 * Actions
 */

export const addItem = item => ({ type: ADD_ITEM, item })
export const deleteItem = id => ({ type: DELETE_ITEM, id })

/**
 * Reducers
 */

const initialState = [
  {
    item: 'hello'
  }
]

export const todos = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_ITEM:
      return [...state, { item: action.item }]
    case DELETE_ITEM:
      return state.filter((v, k) => k !== action.id)
    default:
      return state
  }
}

export const reducer = combineReducers({
  todos
})

/**
 * store
 */

export const store = createStore(reducer)

/**
 * Render
 */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
