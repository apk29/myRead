import React from "react";
import CurrentlyReading from "./currentlyReading";
import WantToRead from "./wantToRead";
import Read from "./read";

const Bookshelf = ({ moveShelf, books}) => {
  return (
    <main className="container">
      <div className="list-books">
        <h1 className="list-books-title">MyReads</h1>
        <div className="list-books-container">
        <CurrentlyReading shelf={books} moveBook={moveShelf} />
        </div>
        <div className="open-search">
          
        </div>
      </div>
    </main>
  );
};

export default Bookshelf;
