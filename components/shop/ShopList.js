import React from "react";
import { View, Text } from "react-native";
import { BottomStyling } from "../../styles";
import { List, Spinner } from "native-base";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";
import shopInstance from "../../stores/shopStore";
import { ListWrapper } from "./styles";

const ShopList = ({ navigation }) => {
  // if (shopInstance.loading) return <Spinner />;
  const shopList = shopInstance.shops.map((shops) => (
    <ShopItem shops={shops} key={shops.id} navigation={navigation} />
  ));
  return <ListWrapper>{shopList}</ListWrapper>;
};

export default observer(ShopList);
