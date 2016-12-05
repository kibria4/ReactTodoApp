import React, { Component } from 'react';

export default class TodoSearch extends Component {

  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render(){
    return (
      <div>
        <div><input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch} /></div>
        <div>
          <label htmlFor="showCompleted">
            <input type="checkbox" id="showCompleted" ref="showCompleted" onChange={this.handleSearch} />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }

}
