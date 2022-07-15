import { Button, StyleSheet } from "react-native";
import { EditScreenInfo } from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useLocalizationContext } from "../locales/locales";

export default function TabOneScreen() {
  const { t, setLocale } = useLocalizationContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("welcome")}</Text>
      <Button
        onPress={() => {
          setLocale("en");
        }}
        title="change"
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
