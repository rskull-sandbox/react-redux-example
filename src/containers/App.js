// @flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

class App extends Component<{}> {
  render() {
    const { todos, actions } = this.props
    return (
      <div>
        <button onClick={() => actions.addItem('world')}>ADD</button>
        <ul>
          {todos.map((v, k) => <li onClick={() => actions.deleteItem(k)}>{v.item}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
