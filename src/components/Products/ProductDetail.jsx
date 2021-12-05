import { Img } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/cart-slice";
import ItemCounter from "./ItemCounter";
const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const onAddToCart = (quantity) => {
    const productToAdd = { ...product, amount: quantity };
    console.log(productToAdd);
    dispatch(CartActions.addToCart(productToAdd));
  };
  return (
    <Flex
      m={5}
      borderRadius={"10px"}
      border={"1px solid rgb(129 128 128 / 18%)"}
    >
      <Flex p={2}>
        <Img
          p={2}
          overflow="hidden"
          maxW={"360px"}
          src={product.imgsrc}
          alt="imagen product"
        />
      </Flex>
      <Flex w={"1px"} bgColor={"rgb(129 128 128 / 18%)"}></Flex>
      <Flex
        p={5}
        direction={"column"}
        bgColor={"rgb(129 128 128 / 18%)"}
        borderRadius={"0 10px 10px 0"}
      >
        <Heading>{product.name}</Heading>
        <Heading size={"md"}>${product.price}</Heading>
        <Text mt={2}>{product.description.toUpperCase()}</Text>
        <Flex
          w={"100%"}
          mt={"5%"}
          h={"1px"}
          bgColor={"rgb(129 128 128 / 18%)"}
        ></Flex>
        <Flex w={"100%"} justifyContent={"center"} mt={"5%"}>
          <ItemCounter
            buttonText={"Add to cart"}
            limit={product.stock}
            idProduct={product.id}
            clickHandler={onAddToCart}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ProductDetail;
