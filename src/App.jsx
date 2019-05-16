import React, {Component} from 'react';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/Layout/Header';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './Components/Pages/About';
import axios from 'axios';

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

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      res => 
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      })
    )


  };

  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false}).then(
      res => 
        this.setState({
          todos: [...this.state.todos, res.data]
        })
    )


  }

  render () {
    console.log(this.state);
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header/>
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path='/about' component={About} />
          </div>
        </div>

      </Router>

    );

  }
}

export default App;
