import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS, FONT_PIXEL } from "../Themes/gameTheme";
import { PokemonBattle } from "../Types/pokemon";

interface AttackButtonsProps {
  pokemon: PokemonBattle | undefined;
  busy: boolean;
  onUseMove: (moveIdx: number) => void;
}

export default function AttackButtons({ pokemon, busy, onUseMove }: AttackButtonsProps) {
  if (!pokemon) return null;

  const slots = [0, 1, 2, 3];

  return (
    <View style={styles.grid}>
      {slots.map((i) => {
        const move = pokemon.moves[i];
        const hasMove = !!move;
        const power =
          i === 0
            ? Math.round(40 + pokemon.atk * 0.3)
            : Math.round(60 + pokemon.atk * 0.2);
        const enabled = hasMove && !busy;

        return (
          <Pressable
            key={i}
            onPress={() => enabled && onUseMove(i)}
            disabled={!enabled}
            style={({ pressed }) => [
              styles.btn,
              !hasMove ? styles.btnEmpty : busy ? styles.btnBusy : styles.btnActive,
              pressed && enabled && styles.btnPressed,
            ]}
          >
            <Text
              style={[
                styles.moveName,
                { color: hasMove ? COLORS.branco : "rgba(255,255,255,0.2)" },
              ]}
            >
              {hasMove ? move.replace(/-/g, " ").toUpperCase() : "—"}
            </Text>
            {hasMove && <Text style={styles.power}>POD: {power}</Text>}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 6,
    marginBottom: 8,
  },
  btn: {
    width: "48.5%",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
  },
  btnActive: {
    backgroundColor: COLORS.azulEscuro,
    borderColor: COLORS.azul,
    borderBottomWidth: 4,
    borderBottomColor: "#0c1530",
  },
  btnBusy: {
    backgroundColor: "rgba(29,44,94,0.35)",
    borderColor: "rgba(42,117,187,0.3)",
  },
  btnEmpty: {
    backgroundColor: "rgba(29,44,94,0.35)",
    borderColor: "rgba(255,255,255,0.08)",
  },
  btnPressed: { opacity: 0.7, transform: [{ translateY: 2 }] },
  moveName: { fontFamily: FONT_PIXEL, fontSize: 13, textAlign: "center", lineHeight: 13 },
  power: { fontFamily: FONT_PIXEL, fontSize: 11, color: COLORS.amarelo, marginTop: 3 },
});
