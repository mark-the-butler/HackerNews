import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Table from './Table';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: ''
    };
  }

  onDismiss = (id) => {
    let updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  isSearched = (searchTerm) => {
    return (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }

  render() {
    const { list, searchTerm } = this.state;
    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        >
          Search
        </Search>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
          isSearched={this.isSearched}
        />
      </div>
    );
  }
}

export default App;
