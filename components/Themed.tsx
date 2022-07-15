// Learn more about Light and Dark modes:
// https://docs.expo.dev/guides/color-schemes/
import {
  StyleProp,
  Text as DefaultText,
  TextStyle,
  useColorScheme,
  View as DefaultView,
  ViewStyle,
} from "react-native";
import { StyleProps } from "react-native-reanimated";

import Colors from "../constants/Colors";

type ColorTheme = {
  light: string;
  dark: string;
};

type Props<T> = {
  style?:  StyleProp<T>;
  lightColor?: string;
  darkColor?: string;
};

export const useThemeColor = (props: ColorTheme, colorName: string) => {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
};

export const Text: React.FC<Props<TextStyle>> = (props) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const View: React.FC<Props<ViewStyle>> = (props) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
