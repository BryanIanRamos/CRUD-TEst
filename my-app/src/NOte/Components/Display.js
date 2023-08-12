import React from "react";
import { Link } from "react-router-dom";

function Display({ books }) {
  return (
    <>
      <div>
        {books.map((elem, index) => (
          <div key={elem.id}>
            <Link to={`/books/${elem.id}`}>
              <h2>{elem.title}</h2>
              {/* <p>{elem.author}</p>
              <p>{elem.year}</p> */}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Display;
