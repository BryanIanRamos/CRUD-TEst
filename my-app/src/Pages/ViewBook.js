import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../Components/useFetch";
import Create from "../NOte/Components/Create";

function ViewBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: books,
    loading,
    error,
  } = useFetch("http://localhost:7000/books/" + id);

  const hadleDelete = () => {
    fetch("http://localhost:7000/books/" + id, {
      method: "DELETE",  
    }).then(() => {
      console.log("Delete Book Successfully");
      navigate("/");
    });
  };

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>No data found!</h2>}
      {books && (
        <>
          <h1>View Book Page - {id} </h1>
          <h2>{books.title}</h2>
          <p>{books.author}</p>
          <p>{books.year}</p>
        </>
      )}
      <button onClick={hadleDelete}>Delete</button>
    </>
  );
}

export default ViewBook;
