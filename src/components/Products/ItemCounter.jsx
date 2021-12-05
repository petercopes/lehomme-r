import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const ItemCounter = ({ limit, clickHandler, buttonText, value = 0 }) => {
  const [counter, setCounter] = useState(value);
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
        p={"1%"}
        m={"5%"}
        alignItems={"center"}
        borderRadius={"10px"}
        justifyContent={"space-between"}
      >
        <Button w={"30%"} onClick={removeHandler} as={AiOutlineMinus} />
        <Text textAlign={"center"} w={"30%"}>
          {counter}
        </Text>
        <Button w={"30%"} onClick={addHandler} as={AiOutlinePlus} />
      </Flex>
      {counter > 0 ? (
        <Flex
          as={Button}
          justifySelf={"center"}
          onClick={() => {
            clickHandler(counter);
          }}
        >
          <Text textAlign={"center"}>{buttonText}</Text>
        </Flex>
      ) : (
        <Flex
          as={Button}
          disabled
          justifySelf={"center"}
          onClick={() => {
            clickHandler(counter);
          }}
        >
          <Text>{buttonText}</Text>
        </Flex>
      )}
    </Flex>
  );
};
export default ItemCounter;
