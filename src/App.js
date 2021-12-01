import "./App.css";
import React from "react";
import NavBar from "./components/UI/navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./screens/Products";
import Home from "./screens/Home";
import Product from "./screens/Product";

const MOCKDATA = [
  { name: "home", url: "home" },
  { name: "products", url: "products" },
];
function App() {
  return (
    <>
      <NavBar navElems={MOCKDATA}></NavBar>
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route
          path="products"
          element={<Products greeting={"Products Catalog"} />}
        ></Route>
        <Route path={"products/:id"} element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
