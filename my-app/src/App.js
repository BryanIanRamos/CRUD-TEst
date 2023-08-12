import React from "react";
import Home from "./Pages/Home";
import AddBook from "./Pages/AddBook";
import ViewBook from "./Pages/ViewBook";
import Delete from "./Pages/Delete";
import TopNavBar from "./Components/TopNavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <TopNavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/display/:id" element={<ViewBook />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Router>
  );
}
