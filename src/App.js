import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ToDo from './ToDo/Todo';
import ToDoForm from './ToDoForm/ToDoForm';

class App extends Component {
  constructor(props){
    super(props);

    this.addTodo = this.addTodo.bind(this);

    // m going to setup the React state of our component
    this.state = {
      todos: [
        { id: 1, todoContent: "Todo Content 1" },
        { id: 2, todoContent: "Todo Content 2" },
      ],
    }
  }

  addTodo(todo){
    // push the todo on to todos array.
    const previousTodos = this.state.todos;

    previousTodos.push({
      id: previousTodos.length+1, todoContent: todo
    });
    
    this.setState({
        todos: previousTodos
    });

    this.state.todos = previousTodos;
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
              <ToDoForm addTodo={this.addTodo} />
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
