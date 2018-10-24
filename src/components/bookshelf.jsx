import React from 'react';
import OnShelf from './onShelf';

const Bookshelf = ({ moveShelf, books}) => {
  return (
    <main className="container">
      <div className="list-books">
        <h1 className="list-books-title">MyReads</h1>
        <div className="list-books-container">
        <OnShelf shelf={books} moveBook={moveShelf} />
       
        </div>
        <div className="open-search">
          
        </div>
      </div>
    </main>
  );
};

export default Bookshelf;
