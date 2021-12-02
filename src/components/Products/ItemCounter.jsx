import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const ItemCounter = ({ limit, clickHandler, idProduct }) => {
  const [counter, setCounter] = useState(0);
  const removeHandler = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const addHandler = () => {
    counter < limit && setCounter(counter + 1);
  };
  return (
    <Flex direction={"column"}>
      <Flex
        bgColor={"grey"}
        p={"1%"}
        m={5}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Button onClick={removeHandler} as={AiOutlineMinus} />
        <p>{counter}</p>
        <Button onClick={addHandler} as={AiOutlinePlus} />
      </Flex>
      <Flex
        as={Button}
        justifySelf={"center"}
        onClick={() => {
          clickHandler(counter);
        }}
      >
        <Text>Add to Cart</Text>
      </Flex>
    </Flex>
  );
};
export default ItemCounter;
