import React from "react";
import { NativeBaseProvider } from "native-base";

import { ThemeProvider } from "styled-components";

import { NavigationContainer } from "@react-navigation/native";
//components
import { Root_Navigator } from "./components/Navigation/index";

const theme = {
  mainColor: "#E49C57",
  backgroundColor: "#1C80E0",
  pink: "#f283a2",
  red: "red",
};

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Root_Navigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
