import React from "react";
import Book from "./book";

const OnShelf = ({ shelf, moveBook }) => {
    return (
            <div className="bookshelf">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {shelf.map(
                  (book, i) =>
                    book.imageLinks ? (
                      <li key={i}>
                        <Book
                          title={book.title}
                          authors={book.authors}
                          img={book.imageLinks.thumbnail}
                          book={book}
                          shelf={book.shelf}
                          newShelf={moveBook}
                        />
                      </li>
                    ) : (
                      <Book
                        title={book.title}
                        authors={book.authors}
                        img={""}
                        book={book}
                        shelf={book.shelf}
                        newShelf={moveBook}
                      />
                    )
                )}
              </ol>
            </div>
          </div>
         );
    };
 
export default OnShelf;