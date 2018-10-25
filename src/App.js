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

  // this grabs all the books from the server and puts in the array books
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
    
  }

  render() {
    const { books } = this.state; //this sets books = this.state.books
    const { moveShelf } = this; //this sets moveShelf = this.move.shelf
    
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={() => (
 <Bookshelf books={books} moveShelf={moveShelf} />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <Search books={books} moveShelf={moveShelf} />
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
