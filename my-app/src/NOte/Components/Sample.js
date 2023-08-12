import React, { useState } from "react";

function Sample({ books }) {
  const [selectedIndex, setIndex] = useState(0);

  return (
    <>
      <ul className="list-group">
        {books.map((object, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={object.id}
            onClick={() => setIndex(index)}
          >
            {object.title} ({object.year})
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sample;
