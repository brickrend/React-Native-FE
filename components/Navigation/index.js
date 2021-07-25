import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../shop/ShopList";
import ShopDetail from "../shop/ShopDetail";

const Stack = createStackNavigator();

export const Root_Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#E49C57",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShopList"
        component={ShopList}
        options={{
          title: "Choose a Shop",
        }}
      />
      <Stack.Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          const { shops } = route.params;
          return {
            title: shops.name,
          };
        }}
      />
    </Stack.Navigator>
  );
};

// export default Root_Navigator();
