import React, { Component } from 'react';
import TodoItem from './Todo_item';
import PropTypes from 'prop-types';

class Todos extends Component {
    // constructor(props) {
    //     super(props);
    // }

 
    render() {
        return (
           this.props.todos.map(todo => (
               <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
           ))
        );

    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
