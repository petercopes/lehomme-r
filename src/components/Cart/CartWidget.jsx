import Icon from "@chakra-ui/icon";
import { Badge, Flex } from "@chakra-ui/layout";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const CartWidget = () => {
  return (
    <Flex>
      <Icon alignSelf={"center"} as={AiOutlineShoppingCart}></Icon>
      <Badge></Badge>
    </Flex>
  );
};
export default CartWidget;
