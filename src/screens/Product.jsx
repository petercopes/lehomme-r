import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { useParams } from "react-router";
import ProductDetail from "../components/Products/ProductDetail";
import { fetchProduct } from "../firebase/api";
const Product = () => {
  const [product, setProduct] = useState();
  const [fetched, setFetched] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async (idProduct) => {
      try {
        const product = await fetchProduct(idProduct);
        setProduct(product);
        setFetched(true);
      } catch (error) {
        setFetched(true);
      }
    };
    const getProductHandler = () => {
      getProduct(id);
    };
    const delayedGetProduct = debounce(getProductHandler, 2000);
    delayedGetProduct();
  }, [id]);
  const productdetail = product ? (
    <ProductDetail product={product} />
  ) : (
    <p>No se ha podido encontrar el producto</p>
  );
  const content = fetched ? productdetail : "";
  return (
    <Flex justifyContent={"center"} alignItems={"center"} height={"80vh"}>
      {content}
    </Flex>
  );
};
export default Product;
