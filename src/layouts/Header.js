import React from "react";
import { Route, Routes } from "react-router-dom";

import "../styles/header.css";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
const Header = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default Header;
