import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About/About";
import Books from "./pages/Books/Books";
import Book from "./pages/Books/Book";
import { Home } from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import Layout from "./components/Layout/Layout";
import AdminPanel from "./pages/Admin/AdminPanel";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:uuid" element={<Book />} />
      </Route>
      <Route path="/admin" element={<AdminPanel />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
