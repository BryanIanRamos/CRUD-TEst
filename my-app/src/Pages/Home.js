import React, { useEffect, useState } from "react";
import useFetch from "../Components/useFetch";
import { Link } from "react-router-dom";

function Home() {
  const {
    data: books,
    loading,
    error,
  } = useFetch(" http://localhost:7000/books");

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>No data found!</h2>}
      {books && (
        <div>
          {books.map((book) => (
            <div key={book.id}>
              <Link to={`/display/${book.id}`}>
                <h3>{book.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
