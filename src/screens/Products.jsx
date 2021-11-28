import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/Products/ProductList";
import { Heading } from "@chakra-ui/layout";
const url = "https://60d8bcffeec56d00174774a8.mockapi.io/products";
const Products = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (!response.status === 200) {
          throw new Error("Could not fetch data!");
        }
        setProducts(response.data);
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
