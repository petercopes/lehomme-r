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
import CartItem from "../components/Cart/CartItem";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <Flex direction={"column"} m={5} p={5}>
      <Heading>Your Cart</Heading>
      <Flex>
        {cartItems?.length !== 0 && cartItems !== undefined ? (
          <Table
            variant="simple"
            mt={5}
            bg="rgba(22, 22, 22, 0.271)"
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
      <Flex mt={"5%"}>
        {cartItems.length !== 0 ? (
          <Button>
            <Link to={"/order"} state={{ items: cartItems }}>
              Finalizar Orden
            </Link>
          </Button>
        ) : (
          <Button disabled>Finalizar Orden</Button>
        )}
      </Flex>
    </Flex>
  );
};
export default Cart;
