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
      {counter > 0 ? (
        <Flex
          as={Button}
          justifySelf={"center"}
          onClick={() => {
            clickHandler(counter);
          }}
        >
          <Text>{buttonText}</Text>
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
