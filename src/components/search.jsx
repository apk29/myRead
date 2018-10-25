import React, { Component } from "react";
import Book from "./book";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";

class Search extends Component {
    state = {
      query: "",
      booksShown: []
    };
  
    render() {
      const { query, booksShown } = this.state;
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                value={query}
                placeholder="Search"
                onChange={event => this.performQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {booksShown.map(
                (book, i) =>
                  book.imageLinks ? (
                    <li key={i}>
                      <Book
                        newShelf={this.props.moveShelf}
                        title={book.title}
                        authors={book.authors}
                        img={book.imageLinks.thumbnail}
                        book={book}
                        shelf={book.shelf}
                      />
                    </li>
                  ) : (
                    <li key={i}>
                      <Book
                        newShelf={this.props.moveShelf}
                        title={book.title}
                        authors={book.authors}
                        img={""}
                        book={book}
                        shelf={book.shelf}
                      />
                    </li>
                  )
              )}
            </ol>
          </div>
        </div>
      );
    }
  
    performQuery = query => {
      let booksShown = [];
      this.setState({ query });
      if (query) {
        BooksAPI.search(query).then(booksMatching => {
          if (booksMatching.length > 0) {
            booksShown = booksMatching.map(b => {
              const index = this.props.books.findIndex(c => c.id === b.id);
              if (index >= 0) {
                return this.props.books[index];
              } else {
                return b;
              }
            });
          }
          this.setState({ booksShown });
        });
      } else {
        this.setState({ booksShown });
      }
    };
  }
  
  export default Search;