import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ToDo from './ToDo/Todo';

class App extends Component {
  constructor(props){
    super(props);

    // m going to setup the React state of our component
    this.state = {
      todos: [
        { id: 1, todoContent: "Todo Content 1" },
        { id: 2, todoContent: "Todo Content 2" },
      ],
    }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React+Firebase My-ToDo-App</h1>
        </header>

        <section className="todo-wrapper">
          <div className="todo-header">
            <div className="todo-header-content">
              ToDo List
            </div>
          </div>

          <div className="todo-body">
            {
              this.state.todos.map((todo) => {
                return (
                  <ToDo todoContent={todo.todoContent} todoId={todo.todoId} key={todo.todoId} /> 
                )                
              })
            }            
          </div>

          <div className="todo-footer">
            <div className="todo-footer-content">
              ToDo List
            </div>
          </div>
        </section>

        <footer className="App-footer">
            &copy;<a href="http://hasnat.me" target="_blank">Opu Hasnat</a>
        </footer>
      </div>
    );
  }
}

export default App;
