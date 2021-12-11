import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/tag";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
const CartWidget = () => {
  const amount = useSelector((state) => state.cart.totalItems);
  return (
    <Tag variant="subtle">
      <TagLeftIcon boxSize="12px" as={AiOutlineShoppingCart} />
      <TagLabel>{amount}</TagLabel>
    </Tag>
  );
};
export default CartWidget;
