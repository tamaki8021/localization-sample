// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
import { createStackNavigator } from "@react-navigation/stack";

import { NotFoundScreen } from "../screens/NotFoundScreen";
import { BottomTabParamList, BottomTabNavigator } from "./BottomTabNavigator";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
};
