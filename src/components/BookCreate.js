import React from "react";
import { useState } from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleFormChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add A Title</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleFormChange} />
        <button className="button">Submit</button>
      </form>
    </div>
  );.
}
