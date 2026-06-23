import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { COLORS, FONT_PIXEL } from "../Themes/gameTheme";
import { BattleResult } from "../Types/pokemon";

interface BattleLogProps {
  log: string;
  busy: boolean;
  battleOver: BattleResult;
}

export default function BattleLog({ log, busy, battleOver }: BattleLogProps) {
  const blink = useRef(new Animated.Value(1)).current;
  const showCursor = !battleOver && !busy;

  useEffect(() => {
    if (!showCursor) return;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(blink, { toValue: 0, duration: 350, useNativeDriver: true }),
        Animated.timing(blink, { toValue: 1, duration: 350, useNativeDriver: true }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [showCursor, blink]);

  return (
    <View style={styles.box}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>BATALHA</Text>
      </View>
      <Text style={styles.logText}>
        {log}
        {showCursor && (
          <Animated.Text style={[styles.cursor, { opacity: blink }]}>
            {"  ▼"}
          </Animated.Text>
        )}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.branco,
    borderWidth: 4,
    borderColor: COLORS.azulEscuro,
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 12,
    minHeight: 52,
    marginBottom: 8,
    justifyContent: "center",
  },
  tag: {
    position: "absolute",
    top: 0,
    left: 12,
    backgroundColor: COLORS.azul,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 1,
  },
  tagText: { fontFamily: FONT_PIXEL, color: COLORS.amarelo, fontSize: 6, letterSpacing: 1 },
  logText: { fontFamily: FONT_PIXEL, fontSize: 9, color: COLORS.azulEscuro, lineHeight: 18 },
  cursor: { fontFamily: FONT_PIXEL, fontSize: 9, color: COLORS.azulEscuro },
});
