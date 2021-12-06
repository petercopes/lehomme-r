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
    dispatch(CartActions.addToCart(productToAdd));
  };
  return (
    <Flex
      bgColor={"rgb(129 128 128 / 18%)"}
      p={"2%"}
      m={2}
      borderRadius={"10px"}
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
      <Flex direction={"column"} w={"30%"}>
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
