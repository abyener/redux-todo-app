import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addTodo } from './action/actions.js'

import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js'

class App extends Component {
  render(){

    const {dispatch,eklenmisTodos}=this.props

    return (
      <div className="App container">
          <AddTodo onAddClick={text=>dispatch(addTodo(text))} />
          <TodoList todos={eklenmisTodos} />
      </div>
    );
  }

}

function select(state){
  return{
    eklenmisTodos:state.todos
  }
}

export default connect(select)(App);
