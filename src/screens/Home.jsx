import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Flex direction={"column"}>
      <Heading textAlign={"center"}>
        Bienvenido al sitio oficial de Le homme
      </Heading>
      <Flex justify={"center"}>
        <Flex as={Button} justifySelf={"center"} m={10}>
          <Link as={Text} to={"/products"} textAlign={"center"}>
            Mira nuestros productos
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Home;
