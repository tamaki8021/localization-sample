import { Platform, TextStyle } from "react-native";

import { Text } from "./Themed";

type Props = {
  style?: TextStyle;
};

export const MonoText: React.FC<Props> = (props) => {
  return (
    <Text
      style={[
        props.style,
        {
          // The "code" font is different on each platform.
          fontFamily: Platform.select({
            default: "Courier",
            ios: "Courier New",
            android: "monospace",
          }),
          fontWeight: "500",
        },
      ]}
    />
  );
};
