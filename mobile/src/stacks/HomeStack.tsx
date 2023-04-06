import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, DetailsScreen } from "../pages";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
