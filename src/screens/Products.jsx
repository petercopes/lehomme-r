import React, { useEffect, useState } from "react";
import ProductList from "../components/Products/ProductList";
import { Heading } from "@chakra-ui/layout";
import { fetchProducts } from "../firebase/api";
const url = "https://60d8bcffeec56d00174774a8.mockapi.io/products";
const Products = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <>
      <Heading textAlign={"center"}>{greeting}</Heading>
      <ProductList products={products} />
    </>
  );
};
export default Products;
