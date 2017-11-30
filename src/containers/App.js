// @flow
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

type Props = {
  todos: any,
  actions: any
}

const App = (props: Props) => {
  const { todos, actions } = props
  return (
    <div>
      <button onClick={() => actions.addItem('world')}>ADD</button>
      <ul>
        {todos.map((v, k) => (
          <li key={`item-${v}`}>
            <div
              onClick={() => actions.deleteItem(k)}
              onKeyDown
              role="button"
              tabIndex="0"
            >
              {v.item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
