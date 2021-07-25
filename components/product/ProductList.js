import React from "react";

import { List, Spinner } from "native-base";

//components
import ProductItem from "./ProductItem";

//styles
import { ListWrapper } from "./styles";
import productInstance from "../../stores/productStore";

const ProductList = ({ product }) => {
  if (productInstance.loading) return <Spinner />;
  const productList = product.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <ListWrapper>{productList}</ListWrapper>;
};

export default ProductList;
