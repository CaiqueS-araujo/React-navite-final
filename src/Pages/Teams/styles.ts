import { StyleSheet } from "react-native";
import { COLORS } from "../../Themes/gameTheme";

export const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: COLORS.azulEscuro },
  header: {
    backgroundColor: COLORS.amarelo,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignItems: "flex-end",
  },
});
