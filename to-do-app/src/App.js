import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newDescription: ""
    }
  }

  toggleComplete(position) {

    const todos2 = this.state.todos.slice();
    const todo = todos2[position];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos2 });

   }


  handleChange(e) {
    this.setState({ newDescription: e.target.value })
  }
  handleSubmit(e) {
   e.preventDefault();
   if (!this.state.newDescription) { return }
   const newTodo = { description: this.state.newDescription, isCompleted: false };

   this.setState({ todos: [...this.state.todos, newTodo], newDescription: '' });
 }



  render() {

    return (
      <div className="App">
      <ul>
       {this.state.todos.map((todo,index) =>
            <ToDo key={ index }
            description={ todo.description }
            isCompleted={ todo.isCompleted }
            toggleComplete={ () => this.toggleComplete(index) }


          />
)}
     </ul>
     <form   onSubmit={ (e) => this.handleSubmit(e)}>
          <input
          type="text"
          value ={this.state.newDescription}
          onChange={ (e) => this.handleChange(e) }/>

          <input type="submit" />
        </form>
      </div>
    );
  }
}





export default App;
