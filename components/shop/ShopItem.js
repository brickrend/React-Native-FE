import React from "react";

import { Image } from "react-native";
//native-base
import { List } from "native-base";

//styles
import { ShopItemStyled } from "./styles";

const ShopItem = ({ shops, navigation }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate("ShopDetail", { shops: shops })}
    >
      <Image
        source={{ uri: shops.image }}
        style={{ width: 100, height: 100 }}
      />

      <ShopItemStyled>{shops.name}</ShopItemStyled>
    </List.Item>
  );
};

export default ShopItem;
