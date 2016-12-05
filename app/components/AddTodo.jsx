import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let todoText = this.refs.addTodo.value;

    if(todoText.length > 0){
      this.refs.addTodo.value = "";
      this.props.onAddTodo(todoText);
    } else {
      this.refs.addTodo.focus();
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="addTodo" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}
