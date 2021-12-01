import { Flex } from "@chakra-ui/layout";
import React from "react";
const ProductDetail = ({ product }) => {
  return (
    <Flex m={5} borderRadius={"10px"} border={"1px solid black"}>
      <Flex>
        <img src={product.imgsrc} alt="imagen product" />
      </Flex>
      <Flex direction={"column"}>
        <h2>{product.name}</h2>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
      </Flex>
    </Flex>
  );
};
export default ProductDetail;
