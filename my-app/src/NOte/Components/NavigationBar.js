import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      <Link to="/">Home..</Link>
      <Link to="/Display">Display Data..</Link>
      <Link to="/Create">Create..</Link>
      <Link to="/Delete">Delete Data..</Link>
    </div>
  );
}

export default NavigationBar;
