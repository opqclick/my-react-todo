import React, { Component } from 'react';
import './ToDo.css';
import PropTypes from 'prop-types';

class ToDo extends Component{
    constructor(props){
        super(props);

        this.todoContent = props.todoContent;
        this.todoId = props.todoId;
    }

    render(props){
        return(
            <div className="todos faded-in">
                <p className="todo-content">{ this.todoContent }</p>
            </div>
        )
    }
}

ToDo.PropTypes = {
    todoContent: PropTypes.string
}

export default ToDo;
