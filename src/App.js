import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from "./components/bookshelf";
import CurrentlyReading from './components/currentlyReading';

class App extends Component {
  state = {
    books: []
  }

   /**
   * Component lifecycle: After render API request for data
   */
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
    
  }

  render() {
    return (
 <Bookshelf books={this.state.books} />

    )
  }
}

export default App
