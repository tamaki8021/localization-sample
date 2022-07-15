// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { VFC } from "react";
import { ColorSchemeName } from "react-native";

import { LinkingConfiguration } from "./LinkingConfiguration";
import { RootNavigator } from "./RootNavigator";

type Props = {
  colorScheme: ColorSchemeName;
};

export const Navigation: VFC<Props> = ({ colorScheme }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};
