import React from "react";
import { useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState([]);

  const editBookBYId = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookId = (id) => {
    const updatedBooks = books.filter((books) => {
      return books.id !== id;
    });
    setBooks(updatedBooks);
  };

  const crateBook = (title) => {
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updateBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookBYId} books={books} onDelete={deleteBookId} />
      <BookCreate onCreate={crateBook} />
    </div>
  );
}
