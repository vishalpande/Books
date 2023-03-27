import React from "react";
import { useState, useEffect } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

export default function App() {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await axios.get("  http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookBYId = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookId = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((books) => {
      return books.id !== id;
    });
    setBooks(updatedBooks);
  };

  const crateBook = async (title) => {
    const response = await axios.post("  http://localhost:3001/books", {
      title,
    });

    const updateBooks = [...books, response.data];
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
