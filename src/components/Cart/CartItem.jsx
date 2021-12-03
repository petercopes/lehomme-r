import { Button } from "@chakra-ui/button";
import { Td, Tr } from "@chakra-ui/table";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/cart-slice";
import ItemCounter from "../Products/ItemCounter";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    console.log("enters remove");
    dispatch(CartActions.removeFromCart(item));
  };
  const updateAmountHandler = (quantity) => {
    dispatch(CartActions.updateAmountOnCart({ ...item, amount: quantity }));
  };
  return (
    <Tr key={item.id}>
      <Td>{item.name}</Td>
      <Td>
        <ItemCounter
          limit={item.limit}
          buttonText={"Update Amount"}
          value={item.amount}
          clickHandler={updateAmountHandler}
        />
      </Td>
      <Td>{item.amount * item.price}</Td>

      <Td>
        <Button as={AiFillDelete} onClick={removeHandler}></Button>
      </Td>
    </Tr>
  );
};
export default CartItem;
