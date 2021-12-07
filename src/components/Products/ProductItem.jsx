import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/layout";
import ItemCounter from "./ItemCounter";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/cart-slice";
import { Image } from "@chakra-ui/image";
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
      direction={"column"}
    >
      <Image src={data.imgsrc}></Image>
      <Flex w={"100%"} m={5} justify={"space-around"}>
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
            <Heading size={"md"}>{data.name}</Heading>
          </ChakraLink>
          <Heading size={"sm"}>${data.price}</Heading>
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
    </Flex>
  );
};
export default ProductItem;
