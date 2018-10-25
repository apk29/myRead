import React, { Component } from "react";

class Book extends Component {
  state = {};
// this shows the books and drop down menu 
  render() {
    const { img, book, newShelf, shelf, authors, title } = this.props;
    
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${img})`
            }}
            //  start of drop down menu
          />   
          <div className="book-shelf-changer">
            <select
              className="badge badge-pill"
              onChange={event => newShelf(book, event.target.value)}
              value={shelf || "none"}
              >
              <option value="move" disabled>
                Move to
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }

  moveShelf(book, shelf) {
    this.setState({ shelf });
    this.props.newShelf(book, shelf);
  }
}

export default Book;