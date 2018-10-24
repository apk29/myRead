import React from 'react';
import OnShelf from './onShelf';

const Bookshelf = ({ moveShelf, books}) => {
  return (
    <main className="container">
      <div className="list-books">
        <h1 className="list-books-title">MyReads</h1>
        <div className="list-books-container">
        <h2 className="bookshelf-title container-fluid">Currently Reading</h2>
        <OnShelf shelf={books.filter(b => b.shelf === 'currentlyReading' )} moveBook={moveShelf} />
        <h2 className="bookshelf-title container-fluid">Want to Read</h2>
        <OnShelf shelf={books.filter(b => b.shelf === 'wantToRead' )} moveBook={moveShelf} />
        <h2 className="bookshelf-title container-fluid">Read</h2>
        <OnShelf shelf={books.filter(b => b.shelf === 'read' )} moveBook={moveShelf} />
        </div>
        <div className="open-search">
          
        </div>
      </div>
    </main>
  );
};

export default Bookshelf;
