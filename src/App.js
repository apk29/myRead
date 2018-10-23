import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/bookshelf';


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
    return (<React.Fragment>
 <Bookshelf books={this.state.books} moveShelf={this.moveShelf} />
 
 </React.Fragment>
    )
  }
}



export default App
