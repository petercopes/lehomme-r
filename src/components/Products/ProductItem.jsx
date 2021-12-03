import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/layout";
import ItemCounter from "./ItemCounter";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/cart-slice";
const ProductItem = ({ data }) => {
  const dispatch = useDispatch();
  const onAddToCart = (quantity) => {
    const productToAdd = { ...data, amount: quantity };
    console.log(productToAdd);
    dispatch(CartActions.addToCart(productToAdd));
  };
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
        <ItemCounter
          buttonText={"Add to cart"}
          limit={data.stock}
          idProduct={data.id}
          clickHandler={onAddToCart}
        />
      </Flex>
    </Flex>
  );
};
export default ProductItem;
