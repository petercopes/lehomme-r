import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { Link as ChakraLink } from "@chakra-ui/layout";
import { Button, Button as ChakraButton } from "@chakra-ui/button";
import ItemCounter from "./ItemCounter";
const ProductItem = ({ data }) => {
  return (
    <Flex
      p={"2%"}
      border={"1px solid black"}
      m={2}
      borderRadius={"25px"}
      w={"45%"}
      h={"50%"}
      justifyContent={"space-between"}
    >
      <Flex
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <ChakraLink
          as={Link}
          textDecoration={"none"}
          color={"black"}
          to={data.id}
        >
          <h3>{data.name}</h3>
        </ChakraLink>
        <p>${data.price}</p>
      </Flex>
      <Flex
        direction={"column"}
        border={"1px solid black"}
        borderRadius={5}
        w={"30%"}
      >
        <ItemCounter />
        <Flex as={Button} justifySelf={"center"}>
          <Text>Add to Cart</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ProductItem;
