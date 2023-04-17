import { Button, View, Text } from "react-native";
import navigationHelper from "../../navigationHelper";
import { style } from "./HomeScreen.style";

export function HomeScreen() {
  const onPress = () => navigationHelper.navigate("Details");
  return (
    <View style={style.container}>
      <Text testID="home-screen">Home Screen</Text>
      <Button title="Go to Details" onPress={onPress} testID="go-to-details" />
    </View>
  );
}
