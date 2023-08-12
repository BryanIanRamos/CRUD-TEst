import React from "react";
import { useState } from "react";

interface Props {
  items: string[];
  header: string;

  setItemList: (item: string) => void;
}

// let  => private variable
// var  => public variable
// const => static variable

// PascalCasing = MyApp
// CamelCasing = myApp

function MyTable({ items, header, setItemList }: Props) {
  // const items = ["One", "Two", "Three", "Four", "Five", "Six"];
  const [getIndexItem, setIndexItem] = useState(0);

  if (items.length === 0) {
    return <h1>No Data</h1>;
  }

  return (
    <>
      <h1>{header}</h1>
      <ul className="list-group">
        {items.map((element, index) => (
          <li
            className={
              getIndexItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={element}
            onClick={(event) => {
              setIndexItem(index);
              setItemList(element);
            }}
          >
            Item {element}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MyTable;

// function App() {
//   function message(item: string) {
//     return console.log(item);
//   }

//   const items = ["One", "Two", "Three", "Four", "Five", "Six"];
//   return (
//     <>
//       {/* <MyTable items={items} header="MyFunctionTable" setItemList={message} /> */}
//       <MySample items={items} />
//     </>
//   );
// }
