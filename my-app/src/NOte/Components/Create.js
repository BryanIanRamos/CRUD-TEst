import React, { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("Bryan");

  const handleSubmit = (e) => {
    const book = { title, year, author };
    e.preventDefault();
    console.log({ book });

    fetch("http://localhost:7000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    }).then(() => {
      console.log("New book added!");
    });
  };

  return (
    <>
      <h1>Create Data</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value={"Bryan"}>Bryan</option>
          <option value={"Ian"}>Ian</option>
        </select>

        <label>Year:</label>
        <input
          type="number"
          required
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <button>Submit</button>

        <p>{title}</p>
        <p>{author}</p>
        <p>{year}</p>
      </form>
    </>
  );
}

export default Create;
