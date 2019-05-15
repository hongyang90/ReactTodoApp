import React, {Component} from 'react';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Throw out trash',
          completed: false
        },
        {
          id: 2,
          title: 'Study hard',
          completed: false
        },
        {
          id: 3,
          title: 'Get a job',
          completed: false
        },
      ]
    }
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render () {
    console.log(this.state)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>

      </div>
    );

  }
}

export default App;
