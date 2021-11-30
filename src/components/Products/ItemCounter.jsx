import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const ItemCounter = () => {
  const [counter, setCounter] = useState(0);
  const removeHandler = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const addHandler = () => {
    setCounter(counter + 1);
  };
  return (
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
  );
};
export default ItemCounter;
