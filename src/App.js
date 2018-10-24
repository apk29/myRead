import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/bookshelf';
import Search from './components/search';
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={() => (
            <Bookshelf books={this.state.books} moveShelf={this.moveShelf} />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <Search books={this.state.books} moveShelf={this.moveShelf} />
          )}
        />
      </React.Fragment>
    );
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      BooksAPI.getAll().then(books => {
        this.setState({ books });
      });
    });
  };
}

export default App;
