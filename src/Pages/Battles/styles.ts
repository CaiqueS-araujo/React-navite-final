import { StyleSheet } from "react-native";
import { COLORS, FONT_PIXEL } from "../../Themes/gameTheme";

export const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: COLORS.azulEscuro },
  topBar: {
    backgroundColor: COLORS.amarelo,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignItems: "flex-end",
  },
  darkToggle: {
    backgroundColor: COLORS.azulEscuro,
    borderWidth: 2,
    borderColor: COLORS.amarelo,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
  },
  darkToggleText: { fontFamily: FONT_PIXEL, fontSize: 13, color: COLORS.amarelo },
  content: { padding: 14 },
  empty: {
    flex: 1,
    backgroundColor: COLORS.azulEscuro,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    gap: 16,
  },
  emptyText: {
    fontFamily: FONT_PIXEL,
    fontSize: 16,
    color: COLORS.branco,
    textAlign: "center",
    lineHeight: 18,
  },
  emptyBtn: {
    backgroundColor: COLORS.amarelo,
    borderWidth: 3,
    borderColor: COLORS.azulEscuro,
    borderBottomWidth: 5,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  emptyBtnText: { fontFamily: FONT_PIXEL, fontSize: 16, color: COLORS.amareloTexto },
});
