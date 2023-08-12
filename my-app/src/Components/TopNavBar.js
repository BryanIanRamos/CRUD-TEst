import React from "react";
import { Link } from "react-router-dom";

function TopNavBar() {
  return (
    <>
      <Link to={"/"}>Home...</Link>
      <Link to={"/add"}>Create...</Link>
      <Link to={"/delete"}>Delete...</Link>
    </>
  );
}

export default TopNavBar;
