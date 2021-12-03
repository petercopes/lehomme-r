import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ItemCounter from "../Products/ItemCounter";
import { AiFillDelete } from "react-icons/ai";
import CartItem from "./CartItem";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Flex direction={"column"} m={5} p={5}>
      <Heading>Your Cart</Heading>
      <Flex>
        {cartItems?.length !== 0 && cartItems !== undefined ? (
          <Table
            variant="simple"
            mt={5}
            bg="rgba(154, 201, 251,0.5)"
            rounded={5}
          >
            <Thead>
              <Tr>
                <Th>Item </Th>
                <Th>Amount</Th>
                <Th>Price</Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartItems.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
            </Tbody>
          </Table>
        ) : (
          <Text fontWeight="700">La lista está vacia</Text>
        )}
      </Flex>
    </Flex>
  );
};
export default Cart;
