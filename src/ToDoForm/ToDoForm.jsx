import React, { Component } from 'react';
import './ToDoForm.css';

class ToDoForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            newTodoContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.newTodo = this.newTodo.bind(this);
    }

    // when the user input changes, set new todoContent to the value of what's in the new input box.
    handleUserInput(e){
        console.log(this);
        this.setState({
            newTodoContent: e.target.value, // the value of new todoContent
        });
    }

    newTodo(e){
        // call the method that sets the todoContent for a todo to thelue of input.
        this.props.addTodo(this.state.newTodoContent);

        // set newTodoContent back to an empty string.
        this.setState({
            newTodoContent: '', // the value of new todoContent
        });
    }

    render(){
        return(
            <div className="formWrapper">
                <input type="text" className="todoNote" placeholder="Write a todo note here.." 
                value={this.state.newTodoContent} onChange={this.handleUserInput} />
                <button className="todoButton" onClick={this.newTodo}>Add Todo</button>              
            </div>
        )
    }
}

export default ToDoForm;