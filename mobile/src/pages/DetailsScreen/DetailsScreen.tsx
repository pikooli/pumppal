import { View, Text } from "react-native";
import { style } from "./DetailsScreen.style";

export function DetailsScreen() {
  return (
    <View style={style.container}>
      <Text testID="details-screen">Details Screen</Text>
    </View>
  );
}
