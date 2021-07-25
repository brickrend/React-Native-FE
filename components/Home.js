import React from "react";
import { View, Text } from "react-native";
import {
  HomePageStyle,
  OverLayContainter,
  TopStyling,
  TitleText,
  ButtonStyling,
  BottomStyling,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomePageStyle
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVV_yZyC13JMtkX4iOTzfvn9YUNzIiKSmXag&usqp=CAU",
      }}
    >
      <OverLayContainter>
        <TopStyling>
          <TitleText>Hello</TitleText>
        </TopStyling>
        <BottomStyling>
          <ButtonStyling onPress={() => navigation.navigate("ShopList")}>
            Click to test
          </ButtonStyling>
        </BottomStyling>
      </OverLayContainter>
    </HomePageStyle>
  );
};

export default Home;
