import "./App.css";
import React from "react";
import NavBar from "./components/UI/navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./screens/Products";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import Order from "./screens/Order";

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
        <Route path={"cart"} element={<Cart />} />
        <Route path={"order"} element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
