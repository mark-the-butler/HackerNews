import React, { Component } from 'react';
import './App.css';

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

  onDismiss(id) {
    let updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  isSearched(searchTerm) {
    return (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase());

  }

  render() {
    return (
      <div className="App">
        <form>
          <input type='text' onChange={(e) => this.onSearchChange(e)} />
        </form>
        {this.state.list.filter(this.isSearched(this.state.searchTerm)).map(item => {
          const onHandleDimiss = () =>
            this.onDismiss(item.objectID);

          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={onHandleDimiss}
                  type="button"
                >
                  Dismiss
              </button>
              </span>
            </div>
          );
        }
        )}
      </div>
    );
  }
}

export default App;
