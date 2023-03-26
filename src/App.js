import React from "react";
import useState from "react";
import BookCreate from "./components/BookCreate";

export default function App() {
  const [books, setBooks] = useState([]);

  const crateBook = (title) => {
    console.log("you nedd to book with", title);
  };

  return (
    <div>
      <BookCreate onCreate={crateBook} />
    </div>
  );
}
