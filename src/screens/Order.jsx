import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/react";
import {
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/layout";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { useLocation } from "react-router";
import { AiOutlineCheck } from "react-icons/ai";
import { postOrder } from "../firebase/api";
import { useDispatch } from "react-redux";
import { CartActions } from "../store/cart-slice";
const Order = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [trackingId, setTrackingId] = useState("");
  const { items } = location.state;
  const schema = Yup.object({
    name: Yup.string().required("Por favor ingrese su nombre"),
    lastname: Yup.string().required("Por favor ingrese su apellido"),
    email: Yup.string()
      .email()
      .required("Por favor ingrese su direccion de mail"),
    adress: Yup.string().required("Por favor ingrese una direccion valida"),
  });
  const handlePurchase = async (values) => {
    const buyer = {
      name: values.name,
      lastName: values.lastname,
      email: values.email,
      addres: values.adress,
    };
    let total = 0;
    for (const item of items) {
      total += item.amount * item.price;
    }
    const order = {
      buyerInfo: buyer,
      orderItems: items,
      totalAmount: total,
    };
    const trackingID = await postOrder(order, items);
    setTrackingId(trackingID);
    dispatch(CartActions.emptyCart());
  };
  return (
    <Flex>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        m={"10%"}
        borderWidth="1px"
        borderRadius="lg"
        p={"5%"}
      >
        <Formik
          initialValues={{ name: "", lastname: "", email: "", adress: "" }}
          validationSchema={schema}
          onSubmit={async (values) => {
            await handlePurchase(values);
          }}
        >
          {(props) => (
            <Form>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="name">Nombre</FormLabel>
                    <Input {...field} id="name" placeholder="Nombre" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="lastname">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.lastname && form.touched.lastname}
                  >
                    <FormLabel htmlFor="lastname">Apellido</FormLabel>
                    <Input {...field} id="lastname" placeholder="Apellido" />
                    <FormErrorMessage>{form.errors.lastname}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input {...field} id="email" placeholder="email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="adress">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.adress && form.touched.adress}
                  >
                    <FormLabel htmlFor="adress">Direccion </FormLabel>
                    <Input {...field} id="adress" placeholder="Direccion" />
                    <FormErrorMessage>{form.errors.adress}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button mt={4} type="submit">
                Comprar
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
      <Flex
        alignItems={"center"}
        justifyContent={"flex-start"}
        m={"10% 0"}
        borderWidth="1px"
        borderRadius="lg"
        p={"5%"}
        direction={"column"}
      >
        <Heading mb={5}>Tu pedido</Heading>
        <List>
          {trackingId !== "" ? (
            <Text>
              Gracias por tu compra! Tu numero de seguimiento es {trackingId}
            </Text>
          ) : (
            items.map((e) => (
              <ListItem>
                <ListIcon as={AiOutlineCheck} />
                {e.amount}x {e.name} - {e.amount * e.price}
              </ListItem>
            ))
          )}
        </List>
      </Flex>
    </Flex>
  );
};
export default Order;
