import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../APIs/useFetcha";

function DataDetails() {
  const { id } = useParams();
  const {
    data: books,
    loading,
    errorData,
  } = useFetch("http://localhost:7000/books/" + id);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {errorData && <h1>Invalid Data</h1>}
      {books && (
        <div>
          <div key={books.id}>
            <article>
              <h2>{books.title}</h2>
              <p>{books.id}</p>
              <p>{books.author}</p>
              <p>{books.year}</p>
            </article>
          </div>
        </div>
      )}
    </>
  );
}

export default DataDetails;
