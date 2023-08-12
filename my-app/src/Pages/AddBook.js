import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Bryan");
  const [year, setYear] = useState("");
  const history = useNavigate();

  const hundleSubmit = (e) => {
    const data = { title, author, year };
    e.preventDefault();
    console.log({ data });

    fetch("http://localhost:7000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("Submit Sucessful");
      history("/");
    });
  };

  return (
    <>
      <form onSubmit={hundleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          values={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Year:</label>
        <input
          type="number"
          required
          values={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label>Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value={"Bryan"}>Bryan</option>
          <option value={"Ian"}>Ian</option>
        </select>
        <button>Submit</button>
      </form>
      <p>{title}</p>
      <p>{year}</p>
      <p>{author}</p>
    </>
  );
}

export default AddBook;
