import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONT_PIXEL } from "../Themes/gameTheme";

interface HpBarProps {
  current: number;
  max: number;
  label: string;
  mini?: boolean;
}

export default function HpBar({ current, max, label, mini = false }: HpBarProps) {
  const pct = Math.max(0, Math.round((current / max) * 100));
  const color =
    pct <= 20 ? COLORS.hpBaixo : pct <= 50 ? COLORS.hpMedio : COLORS.hpAlto;

  return (
    <View style={mini ? styles.wrapMini : styles.wrap}>
      <View style={styles.row}>
        <Text style={mini ? styles.labelMini : styles.label}>{label}</Text>
        <Text style={[mini ? styles.valueMini : styles.value, { color }]}>
          {Math.max(0, current)}/{max}
        </Text>
      </View>
      <View style={mini ? styles.trackMini : styles.track}>
        <View
          style={[
            mini ? styles.fillMini : styles.fill,
            { width: `${pct}%`, backgroundColor: color },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 10 },
  wrapMini: { width: "100%" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  label: {
    fontFamily: FONT_PIXEL,
    fontSize: 14,
    color: COLORS.branco,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  labelMini: {
    fontFamily: FONT_PIXEL,
    fontSize: 11,
    color: COLORS.azulEscuro,
    textTransform: "uppercase",
  },
  value: {
    fontFamily: FONT_PIXEL,
    fontSize: 14,
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: "hidden",
  },
  valueMini: { fontFamily: FONT_PIXEL, fontSize: 11 },
  track: {
    height: 16,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.15)",
    overflow: "hidden",
  },
  trackMini: {
    height: 8,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    overflow: "hidden",
  },
  fill: { height: "100%", borderRadius: 6 },
  fillMini: { height: "100%", borderRadius: 3 },
});
