import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./src/stacks";
import navigationHelper from "./src/navigationHelper";

function App() {
  return (
    <NavigationContainer ref={navigationHelper.navigationRef}>
      <HomeStack />
    </NavigationContainer>
  );
}

export default App;
