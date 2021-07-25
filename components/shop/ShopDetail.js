import React from "react";
import shopInstance from "../../stores/shopStore";
import productInstance from "../../stores/productStore";
import ProductList from "../product/ProductList";

//observer
import { observer } from "mobx-react";

//styles
import { ShopDetailTitle, ShopDetailImage, ShopDetailWrapper } from "./styles";

//native-base
import { Spinner } from "native-base";

const ShopDetail = ({ navigation, route }) => {
  const { shops } = route.params;

  if (shopInstance.loading) return <Spinner />;

  const product = shops.product.map((product) =>
    productInstance.getProductById(product.id)
  );
  return (
    <>
      <ShopDetailWrapper>
        <ShopDetailImage source={{ uri: shops.image }} />
        <ShopDetailTitle>{shops.name}</ShopDetailTitle>
      </ShopDetailWrapper>
      <ProductList product={product} />
    </>
  );
};

export default observer(ShopDetail);
