import { Flex } from "@chakra-ui/layout";
import React from "react";
import ProductItem from "./ProductItem";
const ProductList = ({ products }) => {
  const content = products.map((e) => <ProductItem key={e.id} data={e} />);
  return (
    <Flex p={10} wrap={"wrap"}>
      {content}
    </Flex>
  );
};
export default ProductList;
