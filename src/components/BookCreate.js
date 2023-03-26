import React from "react";
import useState from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleFormChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input type="text" value={title} onChnage={handleFormChange} />

        <button>Submit</button>
      </form>
    </div>
  );
}
