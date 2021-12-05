import React from "react";
//import { Flex, Spacer } from "@chakra-ui/react";
import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import CartWidget from "../Cart/CartWidget";
import { useSelector } from "react-redux";

const NavBar = ({ navElems }) => {
  const navElements = navElems.map((e) => (
    <Flex m={2}>
      <ListItem listStyleType="none">
        <ChakraLink
          as={Link}
          to={e.url}
          textDecoration={"none"}
          color={"black"}
        >
          {e.name}
        </ChakraLink>
      </ListItem>
    </Flex>
  ));
  return (
    <>
      <Flex
        m={0}
        alignItems={"center"}
        justifyContent={"space-between"}
        bgColor={"rgba(22, 22, 22, 0.271)"}
        p={5}
        mb={5}
      >
        <Heading>Le Homme</Heading>
        <Flex justifyContent={"flex-end"} as={UnorderedList}>
          {navElements}
          <Flex m={2}>
            <Link to="cart">
              <CartWidget />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default NavBar;
