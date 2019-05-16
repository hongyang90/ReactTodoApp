import React, {Component} from 'react';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/Layout/Header';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuid.v4(),
          title: 'Throw out trash',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Study hard',
          completed: false
        },
        {
          id: uuid.v4(),
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
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render () {
    console.log(this.state);
    return (
      <div className="App">
        <div className='container'>
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>

        </div>

      </div>
    );

  }
}

export default App;
